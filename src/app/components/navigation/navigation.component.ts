import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { deleteToken } from '../../common/token';

type Route = {
  path: string;
  label: string;
};

@Component({
  selector: "app-navigation",
  templateUrl: "navigation.component.html",
  styleUrls: ["navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  constructor(private router: Router) {
  }

  routes: Route[] = [
    {
      path: "/dashboard",
      label: "Dashboard",
    },
    {
      path: "/clients",
      label: "Clients",
    },
    {
      path: "/invoices",
      label: "Invoices",
    },
  ];

  async onLogout() {
    deleteToken()
    await this.router.navigate(["/login"]);
  }
}
