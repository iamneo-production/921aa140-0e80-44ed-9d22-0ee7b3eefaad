import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { CenterProfileComponent } from './components/center-profile/center-profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children: [
    {path:'home',component:AdminHomepageComponent},
    {path:'centers',component:CenterProfileComponent},
    {path:'addcenter',component:AddCenterComponent},
    {path:'viewUsers',component:UserListComponent},
    {path:'editUser/:id',component:EditUserComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
