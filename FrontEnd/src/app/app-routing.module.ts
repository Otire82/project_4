import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesPageComponent } from './all-movies-page/all-movies-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: AllMoviesPageComponent },
  { path: 'borrow', component: BorrowPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'update', component: UpdatePageComponent },
  { path: 'movie', component: MoviePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
