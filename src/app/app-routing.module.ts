import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { DashboardComponent } from "./modules/dashboard/pages/dashboard/dashboard.component";
import { ClientsComponent } from "./modules/clients/pages/clients/clients.component";
import { InvoiceListComponent } from "./modules/invoices/pages/invoice-list/invoice-list.component";
import { ProtectedRouteGuard } from "./guards/protected-route.guard";
import { NormalRouteGuard } from "./guards/normal-route.guard";
import { ClientCreateComponent } from "./modules/clients/pages/client-create/client-create.component";

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
    redirectTo: "clients",
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
        component: ClientsComponent,
      },
      {
        path: "clients/create",
        component: ClientCreateComponent,
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
