import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './private/layout/sidebar/sidebar.component';
import { TopbarComponent } from './private/layout/topbar/topbar.component';
import { FooterComponent } from './private/layout/footer/footer.component';
import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { Router } from './app-routing';
import { BodyComponent } from './private/layout/body/body.component';
import { RolesComponent } from './private/roles/roles.component';
import { AddRolesComponent } from './private/roles/add-roles/add-roles.component';
import { ListRolesComponent } from './private/roles/list-roles/list-roles.component';
import { EditRoleComponent } from './private/roles/edit-role/edit-role.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    RolesComponent,
    AddRolesComponent,
    ListRolesComponent,
    EditRoleComponent
  ],
  imports: [
    BrowserModule, Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
