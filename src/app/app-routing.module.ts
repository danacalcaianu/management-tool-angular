import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {ProjectDetailsComponent} from './project-details/project-details.component'
import {IssueDetailComponent} from './issue-detail/issue-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login',component:LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'home',component:HomeComponent },
  { path: 'dashboard/:userId',component:DashboardComponent },
  { path: 'detail/:id',component:ProjectDetailsComponent },
  { path: ':projectId/issue-detail/:id',component:IssueDetailComponent },
]
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
