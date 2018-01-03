import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class MoviesService {

  private moviesUrl = 'http://localhost:3030/movies/getBatch';

  getMovies(page: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.moviesUrl}/${page}`);
  }
  constructor(private http: HttpClient) { }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any>(`http://localhost:3030/movies/getAll/${term}`).pipe(
      tap(_ => console.log(`found movies matching "${term}"`)),
      map((result)=>result.payload),
      catchError(this.handleError<any>('searchMovies', []))
    );
  }

  getMovie(id: string): Observable<Movie[]>{
    return this.http.get<any>(`http://localhost:3030/movies/${id}/getMovie`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
