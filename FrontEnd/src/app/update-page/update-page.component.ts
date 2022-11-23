import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css'],
})
export class UpdatePageComponent implements OnInit {
  id!: number;
  movie!: Movie;
  form!: FormGroup;

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.findMovie(this.id).subscribe((movie: Movie) => {
      this.movie = movie;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      picture: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      descriptif: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.movieService
      .updateMovie(this.id, this.form.value)
      .subscribe((res: any) => {
        console.log('Post updated Succes!!');
        this.router.navigateByUrl('/movies');
      });
  }
}
