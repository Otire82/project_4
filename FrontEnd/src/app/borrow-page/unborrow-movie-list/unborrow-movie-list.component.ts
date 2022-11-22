import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-unborrow-movie-list',
  templateUrl: './unborrow-movie-list.component.html',
  styleUrls: ['./unborrow-movie-list.component.css']
})
export class UnborrowMovieListComponent implements OnInit {

  unborrowMovies :Movie[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.findBorrowMovies().subscribe(movies => {
  this.unborrowMovies = movies;
  console.log(this.unborrowMovies)
    });
  }

}
