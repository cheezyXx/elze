import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { take } from "rxjs";

import { ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-client-create",
  templateUrl: "client-create.component.html",
  styleUrls: ["client-create.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCreateComponent {
  form = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    birthday: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientsService: ClientsService,
  ) {}

  onSubmit() {
    const { birthday, ...data } = this.form.value as any;

    this.clientsService.create({
      ...data,
      birthday: birthday?.toISOString(),
    })
      .pipe(take(1))
      .subscribe(async () => {
        await this.router.navigate(["clients"]);
      })
  }
}
