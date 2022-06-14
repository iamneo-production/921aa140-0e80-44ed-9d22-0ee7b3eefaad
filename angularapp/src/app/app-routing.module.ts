import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'\login',pathMatch:'full'},
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  },
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then((m)=>m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
