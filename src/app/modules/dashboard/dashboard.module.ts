import { NgModule } from "@angular/core";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [DashboardRoutingModule],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
