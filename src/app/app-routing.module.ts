import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { ProtectedRouteGuard } from "./guards/protected-route.guard";
import { NormalRouteGuard } from "./guards/normal-route.guard";
import { InvoiceListComponent } from "./modules/invoices/pages/invoice-list/invoice-list.component";

export enum ROUTES {
  DASHBOARD = "dashboard",
  CLIENTS = "clients",
  INVOICES = "invoices",
  LOGIN = "login",
  REGISTER = "register",
}

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [ProtectedRouteGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./modules/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "clients",
        loadChildren: () => import("./modules/clients/clients.module").then((m) => m.ClientsModule),
      },
      {
        path: "invoices",
        component: InvoiceListComponent,
      },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [NormalRouteGuard],
    children: [
      {
        component: LoginComponent,
        path: "login",
      },
      {
        component: RegisterComponent,
        path: "register",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
