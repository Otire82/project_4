import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  
    @Input()
  movie!: Movie;

  @Output()
  refresh: EventEmitter<void> = new EventEmitter();
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
  }

  handleDelete(): void {
    this.movieService.deleteMovie(this.movie.id || 0).subscribe(() => this.refresh.emit());
    console.log('deleteMovie' + this.movie.id);
  }
}
