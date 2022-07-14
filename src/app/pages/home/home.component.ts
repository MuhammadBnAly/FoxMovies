import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { mapTvShowToItem } from 'src/app/models/Tv';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { mapMovieToItem, Movie } from '../../models/movie';
//import { MoviesService } from 'src/app/services/movies.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  upcomingMovies : Item[]=[];
  topRatedMovies : Item[]=[];
  popularMovies : Item[]=[];
  nowPlayingMovies : Item[]=[];
  latestMovies : Item[]=[];
  // topRatedTvShows : Item[]=[];


constructor(private movieService : MoviesService, private tvService:TvShowsService) { }
  
  ngOnInit(): void {
    // this.movieService.getMovies('movie/upcoming').subscribe( (response) =>{
    //   this.upcomingMovies = response.results;
    //   //console.log(this.movies);
    // });
    
    this.movieService.getMovies('movie/upcoming').subscribe( (response) =>{
      this.upcomingMovies = response.map( (movie) => mapMovieToItem(movie));
    });

    this.movieService.getMovies('movie/top_rated').subscribe( (response) =>{
      this.topRatedMovies = response.map( (movie) => mapMovieToItem(movie));
    });

    this.movieService.getMovies('movie/popular').subscribe( (response) =>{
      this.popularMovies = response.map( (movie) => mapMovieToItem(movie));
    });

    this.movieService.getMovies('movie/now_playing').subscribe( (response) =>{
      this.nowPlayingMovies = response.map( (movie) => mapMovieToItem(movie));
    });


    // this.tvService.getTvShowsTyped('top_rated').subscribe( (response) =>{
    //   this.nowPlayingMovies = response.map( (tv) => mapTvShowToItem(tv));
    // });

  }

}
