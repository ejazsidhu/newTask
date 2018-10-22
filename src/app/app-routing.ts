import { LoginComponent } from "./public/login/login.component";
import { SignupComponent } from "./public/signup/signup.component";
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./private/home/home.component";
import { RolesComponent } from "./private/roles/roles.component";
import { AddRolesComponent } from "./private/roles/add-roles/add-roles.component";
import { ListRolesComponent } from "./private/roles/list-roles/list-roles.component";

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
        children: [
            { path: '', redirectTo: 'roles', pathMatch: 'full' },
            {
                path: 'roles', component: RolesComponent,
                children: [
                    {
                        path: '', redirectTo: 'list', pathMatch: 'full'
                    },
                    {
                        path: 'add', component: AddRolesComponent
                    },
                    {
                        path: 'list', component: ListRolesComponent
                    }
                ]

            }
        ]
    }

];
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);