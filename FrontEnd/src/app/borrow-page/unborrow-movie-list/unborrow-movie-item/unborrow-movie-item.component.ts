import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-unborrow-movie-item',
  templateUrl: './unborrow-movie-item.component.html',
  styleUrls: ['./unborrow-movie-item.component.css'],
})
export class UnborrowMovieItemComponent implements OnInit {
  @Input()
  movie!: Movie;
  moviesList: Movie[] = [];

  @Output()
  refresh: EventEmitter<void> = new EventEmitter();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  deleteBorrow(id: number): void {
    this.movie.isBorrow = !this.movie.isBorrow;
    this.movieService
      .updateMovie(id, this.movie)
      .subscribe(() => this.refresh.emit());
  }
}
