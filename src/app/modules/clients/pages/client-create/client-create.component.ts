import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: "app-client-create",
  templateUrl: "client-create.component.html",
  styleUrls: ["client-create.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCreateComponent {
  form = this.formBuilder.group({
    firstName: [],
    lastName: [],
    birthday: [],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  async onSubmit() {
    await this.router.navigate(["clients"]);
  }
}
