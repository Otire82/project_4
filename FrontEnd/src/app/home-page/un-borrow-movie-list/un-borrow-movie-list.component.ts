import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-un-borrow-movie-list',
  templateUrl: './un-borrow-movie-list.component.html',
  styleUrls: ['./un-borrow-movie-list.component.css']
})
export class UnBorrowMovieListComponent implements OnInit {

  unborrowMovies :Movie[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.findBorrowMovies().subscribe(movies => {
  this.unborrowMovies = movies;
  console.log(this.unborrowMovies)
    });
  }

}
