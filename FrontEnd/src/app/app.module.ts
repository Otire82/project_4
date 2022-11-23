import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnborrowMovieListComponent } from './borrow-page/unborrow-movie-list/unborrow-movie-list.component';
import { AllMoviesPageComponent } from './all-movies-page/all-movies-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { UnborrowMovieItemComponent } from './borrow-page/unborrow-movie-item/unborrow-movie-item.component';
import { MovieListComponent } from './all-movies-page/movie-list/movie-list.component';
import { MovieListItemComponent } from './all-movies-page/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    HomePageComponent,
    UnborrowMovieListComponent,
    UnborrowMovieItemComponent,
    AllMoviesPageComponent,
    MoviePageComponent,
    BorrowPageComponent,
    UpdatePageComponent,
    CreatePageComponent,
    MovieListComponent,
    MovieListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
