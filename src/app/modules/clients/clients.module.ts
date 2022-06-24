import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HttpClientModule } from "@angular/common/http";

import { ClientsComponent } from "./pages/clients/clients.component";
import { ClientCreateComponent } from "./pages/client-create/client-create.component";
import { ClientDetailComponent } from "./pages/client-detail/client-detail.component";
import { ClientsService } from "./services/clients.service";
import { ClientsRoutingModule } from "./clients-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ClientsRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
  declarations: [ClientsComponent, ClientCreateComponent, ClientDetailComponent],
  providers: [ClientsService],
})
export class ClientsModule {}
