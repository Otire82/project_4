import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private static readonly API_URL = 'http://localhost:8080/movies/';

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(MovieService.API_URL);
  }

  findBorrowMovies(): Observable<Movie[]>{
   return this.http.get<Movie[]>(MovieService.API_URL + "borrow");
  } 

  findMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(MovieService.API_URL + id);
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(MovieService.API_URL + id);
  }

  updateMovie(id: number, movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: movie
    };
    return this.http.put(MovieService.API_URL + id, movie, httpOptions);
  }

  createMovie( movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: movie
    };

    return this.http.post(MovieService.API_URL, movie, httpOptions);

  }
}
