import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private static readonly API_URL = 'http://localhost:8080/movies';

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(MovieService.API_URL);
  }

  findBorrowMovies(): Observable<Movie[]>{
   return this.http.get<Movie[]>(MovieService.API_URL +'?isBorrow=false');
  }

  findMovie(index: string): Observable<Movie> {
    return this.http.get<Movie>(MovieService.API_URL +index);
  }

    deleteMovie(index: string): Observable<Movie> {
    return this.http.get<Movie>(MovieService.API_URL +index);
  }

  updateMovie(index: string, movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: movie
    };
    return this.http.put(MovieService.API_URL +index, movie, httpOptions);
  }
}
