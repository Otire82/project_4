import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {
  movieForm = this.formBuilder.group({
  
    title: ['', Validators.required],
    picture: ['', Validators.required],
    genre: ['', Validators.required],
    descriptif: ['', Validators.required],
  }, {nonNullable: true});

  @Output() public sendMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) { }

  createMovie(): void {
    this.movieService.createMovie({
      ...this.movieForm.value,
      id: null,
    }
    ).subscribe(movie => alert('Votre film a été ajouté'));
    this.movieForm.reset();
  }

}
