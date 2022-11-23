import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesList: Movie[] = [];
  
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(movies => {
      this.moviesList = movies;
    });
  }

}
