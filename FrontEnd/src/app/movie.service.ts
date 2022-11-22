import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private static readonly API_URL = 'http://localhost:8080/movies';

  constructor(private http: HttpClient) { }

  getAll():Observable<Movie[]> {
    return this.http.get<Movie[]>(MovieService.API_URL);
  }

  findAllUnBorrowMovies(): Observable<Movie[]>{
   return this.http.get<Movie[]>(MovieService.API_URL +'?isBorrow=false');
  }
}
