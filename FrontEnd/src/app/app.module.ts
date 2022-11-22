import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnborrowMovieListComponent } from './home-page/unborrow-movie-list/unborrow-movie-list.component';
import { UnborrowMovieItemComponent } from './home-page/unborrow-movie-list/unborrow-movie-item/unborrow-movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    HomePageComponent,
    UnborrowMovieListComponent,
    UnborrowMovieItemComponent
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
