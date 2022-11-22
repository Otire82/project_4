import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-unborrow-movie-item',
  templateUrl: './unborrow-movie-item.component.html',
  styleUrls: ['./unborrow-movie-item.component.css']
})
export class UnborrowMovieItemComponent implements OnInit {

  @Input()
  movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
