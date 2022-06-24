import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NormalRouteGuard } from "./guards/normal-route.guard";
import { MatNativeDateModule } from "@angular/material/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth/auth.module";
import { LayoutComponent } from "./components/layout/layout.component";
import { InvoicesModule } from "./modules/invoices/invoices.module";
import { AlertComponent } from "./components/alert/alert.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { ProtectedRouteGuard } from "./guards/protected-route.guard";

@NgModule({
  declarations: [AppComponent, LayoutComponent, AuthLayoutComponent, AlertComponent, NavigationComponent],
  imports: [AuthModule, InvoicesModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatNativeDateModule],
  providers: [ProtectedRouteGuard, NormalRouteGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
