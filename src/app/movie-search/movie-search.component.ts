import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[] = [];
  movies$: Observable<Movie[]>;
  visible = false;
  private searchTerms = new Subject<string>();

  constructor(private moviesService: MoviesService) { }

  search(term: string): void {

    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.moviesService.searchMovies(term))
      .subscribe(result => {
        this.movies = result;
      })
  }
}
