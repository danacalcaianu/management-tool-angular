import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  visible = false
  i: number = 0;
  imgSrc = ["","","","",""];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  @Input() movie;

  rateMovie() {
    this.visible = !this.visible;
    this.imgSrc = this.imgSrc.map(item=> item = "../assets/hollow-star.png")
  }

  giveStars(rate) {
    this.moviesService.rateMovie(this.movie.id, rate).subscribe(res => this.movie.averageRating = res.payload.averageRating);
    this.visible = false;
  }

  colorStar(n) {
    while (this.i < n) {
      this.imgSrc[this.i] = "../assets/golden-star.png";
      this.i++;
    }
    this.i = 0;
  }

  clearStars() {
    this.imgSrc = this.imgSrc.map(item=> item = "../assets/hollow-star.png")
  }

}
