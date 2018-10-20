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

    // {
    //     path: 'landing', component: LandingPageComponent,
    //     // canActivate: [NotLoginAuthGuard],

    // },
    // { path: 'home', component: HomeComponent },


    // { path: 'pricing', component: PricingComponent },
    {
        path: 'login', component: LoginComponent,

    },
    {
        path: 'signup', component: SignupComponent,

    },

    {
        path: 'home', component: HomeComponent,
    }
    // {
    //     path: 'user-signup', component: UserSignupComponent,

    // },
    // {
    //     path: 'admin-signup', component: AdminSignupComponent,

    // },
    // {
    //     path: 'verification', component: VerificationComponent,

    // },
    // {
    //     path: 'logout', component: LogoutComponent,

    // },
    // { path: 'date-rabge', component: DateRangeComponent },
    // {
    //     path: 'reset-password', component: ResetPasswordComponent,

    // },
    // {
    //     path: 'passwd/reset', component: AddNewPasswordComponent,

    // },

    // {
    //     path: 'timecards',
    //     redirectTo: 'dashboard/timecard',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'notification',
    //     redirectTo: 'dashboard/notification',
    //     pathMatch: 'full'
    // },

    // {
    //     path: 'edit-profile',
    //     redirectTo: 'dashboard/edit-profile',
    //     pathMatch: 'full'
    // },

    // {
    //     path: 'change-password',
    //     redirectTo: 'dashboard/change-password',
    //     pathMatch: 'full'
    // },

    // {
    //     path: 'admin/team',
    //     redirectTo: 'dashboard/team',
    //     pathMatch: 'full'

    // },

    // {
    //     path: 'admin/pendingUsers',
    //     redirectTo: 'dashboard/pendingUsers',
    //     pathMatch: 'full'

    // },
    // {
    //     path: 'admin/billing',
    //     redirectTo: 'dashboard/billing',
    //     pathMatch: 'full'

    // },
    // {
    //     path: 'admin/teamDetails/:id',
    //     redirectTo: 'dashboard/teamDetails/:id',
    //     pathMatch: 'full'

    // },
    // {
    //     path: 'admin/userDetails/:id',
    //     redirectTo: 'dashboard/userDetails/:id',
    //     pathMatch: 'full'

    // },


    /*here we are going to set child routes for dashboard related component */
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     canActivate: [AuthGuard],
    //     children: [

    //         {
    //             path: '',
    //             component: DashboardContent2Component
    //         },
    //         {
    //             path: 'details/:id', component: SuperAdminDashbaordComponent,
    //             children: [
    //                 { path: '', redirectTo: 'organization-members', pathMatch: 'full' },
    //                 { path: 'organization-members', component: OrganizationMembersComponent },
    //                 { path: 'organizations-team', component: OrganizationTeamsComponent }
    //             ]
    //         },

    //         {
    //             path: 'super-admin', component: SuperAdminComponent,
    //             children: [

    //                 { path: '', redirectTo: 'organizations-list', pathMatch: 'full' },
    //                 { path: 'organizations-list', component: OrganizationListComponent },
    //                 { path: 'add-organization', component: AddOrganizationComponent },



    //             ]

    //         },

    //         {
    //             path: 'admin-dashboard', component: AdminDashboardComponent,
    //             // canActivate: [AuthGuard],
    //             children: [
    //                 { path: '', redirectTo: 'members', pathMatch: 'full' },
    //                 { path: 'members', component: MembersListComponent },
    //                 { path: 'teams', component: TeamComponent },
    //                 // { path: 'organization-setting', component: OrganizationComponent },
    //                 { path: 'pendingUsers', component: PendingMembersListComponent },
    //                 { path: 'inviteUser', component: InviteMemberComponent }
    //             ]
    //         },
    //         {
    //             path: 'billing',
    //             component: BillingComponent,
    //             children: [
    //                 { path: '', redirectTo: 'billing-details', pathMatch: 'full' },
    //                 { path: 'billing-details', component: BillingDetailsComponent },
    //                 { path: 'audit-log', component: AuditLogComponent },
    //                 // { path: 'settings', component: BillingSettingsComponent },
    //                 { path: 'settings', component: OrganizationComponent },

    //             ]
    //         },

    //         { path: 'download-tracker', component: DownloadTrackerComponent },


    //         // {
    //         //     path: 'admin/members', component: AdminDashboardComponent,
    //         //     // canActivate: [AuthGuard],
    //         // },

    //         { path: 'manager-dashboard', component: ManagerComponent },
    //         {
    //             path: 'orgProfile',
    //             component: OrganizationComponent
    //         },

    //         {
    //             path: 'pendingUsers',
    //             component: PendingMembersListComponent
    //         },


    //         // {
    //         //     path: 'team',
    //         //     component: TeamComponent
    //         // },
    //         {
    //             path: 'teamDetails/:id',
    //             component: TeamDetailsComponent
    //         },
    //         {
    //             path: 'userDetails/:id',
    //             component: UserDashboardDetailsComponent,
    //             children: [
    //                 {
    //                     path: '', redirectTo: 'dashboard', pathMatch: 'full'
    //                 },
    //                 {
    //                     path: 'dashboard', component: MultiUserDashboardComponent
    //                 },
    //                 {
    //                     path: 'timecards', component: MultiUserTimecardComponent
    //                 },
    //                 {
    //                     path:'productivity-settings',component:SettingComponent
    //                 }

    //             ]
    //         },


    //         {
    //             path: 'notification',
    //             component: NotificationComponent
    //         },
    //         {
    //             path: 'dashboard',
    //             component: DashboardContent2Component
    //         },
    //         {
    //             path: 'dashboard-content',
    //             component: DashboardContent2Component
    //         }
    //         ,
    //         {
    //             path: 'dashboard-content-2',
    //             component: DashboardContent2Component
    //         }
    //         ,
    //         {
    //             path: 'edit-profile',
    //             component: EditProfileComponent
    //         }

    //         ,
    //         {
    //             path: 'timecard',
    //             component: Timecard2Component
    //         }
    //         // ,
    //         // {
    //         //     path: 'timecard-3',
    //         //     component: Timecard3Component
    //         // }

    //         ,
    //         {
    //             path: 'change-password',
    //             component: ChangePasswordComponent
    //         }
    //         ,
    //         {
    //             path: 'working-hours',
    //             component: WorkingHoursComponent
    //         }
    //         ,
    //         {
    //             path: 'setting',
    //             component: SettingComponent
    //         }
    //         ,
    //         {
    //             path: 'logout',
    //             component: LogoutComponent
    //         },
    //         {
    //             path: 'all-users',
    //             component: AllUsersComponent

    //         },
    //         {
    //             path: 'holiday-picker',
    //             component: HolidayPickerComponent

    //         },

    //         {
    //             path: 'create-team',
    //             component: CreateTeamComponent

    //         },
    //         // {
    //         //     path: 'invite-member',
    //         //     component: InviteMemberComponent

    //         // },

    //         // {
    //         //     path: '**', component: PageNotFoundComponent,
    //         //     canActivate: [AdminLoginRedirectGuard]
    //         // }


    //     ]
    // },

    // {
    //     path: '**', component: PageNotFoundComponent,
    //     // canActivate: [AdminLoginRedirectGuard]
    // },
];
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);