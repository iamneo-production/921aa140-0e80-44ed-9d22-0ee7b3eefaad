import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { CenterProfileComponent } from './components/center-profile/center-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UpdateCenterComponent } from './components/update-center/update-center.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminHomepageComponent,
    AddCenterComponent,
    CenterProfileComponent,
    UserListComponent,
    EditUserComponent,
    UpdateCenterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
