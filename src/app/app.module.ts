import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// NOTE: your pages live in src/pages/
import { DashboardComponent } from '../pages/dashboard.component';
import { ApplicationsFeaturesComponent } from '../pages/applications-features.component';
import { GroupsComponent } from '../pages/groups.component';
import { RolesComponent } from '../pages/roles.component';
import { UsersComponent } from '../pages/users.component';
import { TemplatesComponent } from '../pages/templates.component';
import { AuditLogComponent } from '../pages/audit-log.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applications-features', component: ApplicationsFeaturesComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'audit-log', component: AuditLogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationsFeaturesComponent,
    GroupsComponent,
    RolesComponent,
    UsersComponent,
    TemplatesComponent,
    AuditLogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
