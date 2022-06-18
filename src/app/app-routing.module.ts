import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: 'full',
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
