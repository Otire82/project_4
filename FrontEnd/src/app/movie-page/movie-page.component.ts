import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  id!: number;
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.findMovie(this.id).subscribe((movie: Movie) => {
      this.movie = movie;
    });
  }
  list() {
    this.router.navigate(['movies']);
  }
}
