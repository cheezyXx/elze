import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, take } from "rxjs";

import { Client, ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-client-detail",
  templateUrl: "client-detail.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailComponent {
  client = this.activated.params.pipe(
    switchMap((params) => {
      return this.clientsService.get(params["id"]);
    }),
  );

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
  ) {
  }

  onDelete(id: number) {
    this.clientsService.delete(id)
      .pipe(take(1))
      .subscribe(async () => {
        await this.router.navigate(["/clients"]);
      });
  }
}
