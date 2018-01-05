import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  constructor(private MoviesService: MoviesService) { }
  movies : Movie[];
  page: number =1;
  windowSize: number = window.innerHeight / 2;

  getMovies(page): void {
    this.MoviesService.getMovies(page).subscribe(movies => {
      if(this.movies !==undefined){
        return this.movies = this.movies.concat(movies['payload'])
      } else{ 
        return this.movies = movies['payload']}
      });
  }
  ngOnInit() {
    this.getMovies(0);
  }
  @HostListener('window:scroll', ['$event']) onScroll(event: Event) { 
    if(window.pageYOffset>this.windowSize){
      this.getMovies(this.page);
      this.page++;
      this.windowSize+=window.innerHeight
    }
  }
}
