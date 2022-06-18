import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { saveToken } from '../../../../common/token';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {}

  async onSubmit() {
    const value = this.form.value;

    this.loginService.login(value as any)
      .subscribe((response: any) => {
        saveToken(response.accessToken);
        this.router.navigate(["dashboard"]);
      });
  }
}
