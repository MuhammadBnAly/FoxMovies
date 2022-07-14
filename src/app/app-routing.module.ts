import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvComponent } from './pages/tv/tv.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'tvshows',
    component: TvShowsComponent,
  },
  {
    path: 'tvshow/:id',
    component: TvComponent,
  },
  {
    path: 'tvshows/genre/:genreId',
    component: TvShowsComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent,
  },
  {
    path: 'tv',
    component: TvComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
