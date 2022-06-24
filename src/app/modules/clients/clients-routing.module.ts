import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClientsComponent } from "./pages/clients/clients.component";
import { ClientCreateComponent } from "./pages/client-create/client-create.component";
import { ClientDetailComponent } from "./pages/client-detail/client-detail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/clients",
  },
  {
    path: "",
    component: ClientsComponent,
  },
  {
    path: "create",
    component: ClientCreateComponent,
  },
  {
    path: ":id",
    component: ClientDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
