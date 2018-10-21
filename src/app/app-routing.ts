import { LoginComponent } from "./public/login/login.component";
import { SignupComponent } from "./public/signup/signup.component";
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./private/home/home.component";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login', component: LoginComponent,

    },
    {
        path: 'signup', component: SignupComponent,

    },

    {
        path: 'home', component: HomeComponent,
    }

];
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);