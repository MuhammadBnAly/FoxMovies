import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  moviesGenres : Genre[] = [];
  tvShowsGenres : Genre[] = [];
  constructor( private movieService : MoviesService, private tvService : TvShowsService) { }

  ngOnInit(): void {
    // this.getMoviesGenres();
    // this.getTvShowsGenres();
    this.movieService.getGenres().subscribe( (genreData) =>{
      this.moviesGenres = genreData;
    });
    this.tvService.getTvShowGenres().subscribe( (genreData) => {
      this.tvShowsGenres = genreData;
    });
  }

  // getMoviesGenres(){
  //   this.movieService.getGenres().subscribe( (genreData) =>{
  //     this.moviesGenres = genreData;
  //   });
  // }
  // getTvShowsGenres(){
  //   this.tvService.getTvShowGenres().subscribe( (genreData) => {
  //     this.tvShowsGenres = genreData;
  //   });
  // }

}
