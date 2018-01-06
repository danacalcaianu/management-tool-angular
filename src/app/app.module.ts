import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesService } from './movies.service';
import { HeaderComponent } from './header/header.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationService, AlertService, UserService} from "./services/index";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    HeaderComponent,
    MovieSearchComponent,
    HomeComponent,
    RatingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MoviesService,AuthenticationService, AlertService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
