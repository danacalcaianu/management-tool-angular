import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private MoviesService:MoviesService) { }
  movie;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(id)
    
  }
  getMovie(id) {
    console.log("here")
    this.MoviesService.getMovie(id).subscribe(movie => {
      if(movie !==undefined){
        console.log(movie);
        return this.movie = movie["payload"];
      } 
    })
  }
  
}