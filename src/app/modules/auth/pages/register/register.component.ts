import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of, take, throwError } from 'rxjs';

import { checkPasswords } from '../../../../common/validators';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../../components/alert/alert.service';


type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  form = this.formBuilder.nonNullable.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    repeatPassword: ["", [Validators.required]],
  }, {
    validators: [checkPasswords],
  })

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  onSubmit() {
    const { repeatPassword, ...payload } = this.form.value as FormValues;
    this.registerService.register(payload)
      .pipe(
        take(1),
        catchError(() => {
          this.alertService.danger("Something went wrong.");
          return throwError(() => "Something went wrong");
        }),
      )
      .subscribe(async () => {
        this.alertService.success("Nice, your account was successfully created.");
        await this.router.navigate(["/login"]);
      });
  }
}
