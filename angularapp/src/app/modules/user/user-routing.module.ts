import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';

const routes: Routes = [
  {path:'',component:UserDashboardComponent,children: [
    {path:'home',component:UserHomepageComponent},
    {path:'',redirectTo:'/user/home',pathMatch:'full'},
    {path:'add-appointment',component:AddAppointmentComponent},
    {path:'my-bookings',component:MyBookingsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
