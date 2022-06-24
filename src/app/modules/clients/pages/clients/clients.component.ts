import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { take } from "rxjs";
import { Router } from "@angular/router";

import { Client, ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-clients",
  templateUrl: "clients.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent implements OnInit {
  dataSource: Client[] = [];
  displayedColumns = ["firstName", "lastName", "birthday", "action"];

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.clientsService.getAll()
      .pipe(take(1))
      .subscribe((response) => {
        this.dataSource = response;
        this.cd.markForCheck();
      });
  }

  async onDetail(id: string) {
    await this.router.navigate(["/clients", id]);
  }
}
