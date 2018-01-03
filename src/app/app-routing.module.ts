import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MovieListComponent } from './movie-list/movie-list.component'
import { HomeComponent } from './home/home.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',component:HomeComponent},
  {path: 'movies',component:MovieListComponent},
  {path: 'detail/:id',component:MovieDetailComponent},
  { path: '**', redirectTo: '/movies', pathMatch: 'full' },
]
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
