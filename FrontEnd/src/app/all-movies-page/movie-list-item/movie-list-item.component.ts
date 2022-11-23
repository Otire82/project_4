import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
  }

  async handleDelete(id: number): Promise<void> {
    this.movieService.deleteMovie(id);
    console.log('deleteMovie' + id);
  }
}
