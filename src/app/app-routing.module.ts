import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MovieListComponent } from './movie-list/movie-list.component'
import { HomeComponent } from './home/home.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login',component:LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'home',component:HomeComponent },
  { path: 'dashboard',component:DashboardComponent },
  { path: 'movies',component:MovieListComponent },
  { path: 'detail/:id',component:MovieDetailComponent },
  // { path: '**', redirectTo: '/movies', pathMatch: 'full' },
]
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
