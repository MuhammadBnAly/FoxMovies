import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { Genre, mapMovieToItem, Movie, MovieCredits, MovieImage, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import{ POSTER_SIZES } from '../../constants/image-sizes';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie : Movie | null = null;
  movieVideos: MovieVideo[] = [];
  // movieItem : Item  [] = [];
  movieImages: MovieImage [] = [];
  movieCredits: MovieCredits | null= null;
  movieSimilar: Item[] = [];

  imageSizes = POSTER_SIZES;
  // genres : Genre[] = [];

  constructor( private route:ActivatedRoute, private movieService : MoviesService) { }

  ngOnDestroy(): void {
      console.log("Component Destroyed.");
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params) =>{
    //   console.log(params);
    // })
    this.route.params.pipe(first()).subscribe( ({id}) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilars(id);
    });
  }

  getMovie(id:string){
    return this.movieService.getMovie(id).subscribe((movieData)=>{
      this.movie = movieData;
    })
  }

  getMovieVideo(id : string){
    this.movieService.getMovieVideo(id).subscribe( (movieVideoData) =>{
      this.movieVideos = movieVideoData;
    })
  }

  getMovieImages(id : string){
    this.movieService.getMovieImages(id).subscribe( (movieImagesData) =>{
      this.movieImages = movieImagesData;
    })
  }

  getMovieCredits(id : string){
    this.movieService.getMovieCredits(id).subscribe( (movieCreditsData) =>{
      this.movieCredits = movieCreditsData;
    })
  }
  getMovieSimilars(id : number){
    this.movieService.getMovieSimilar(id).subscribe( (movieData) =>{
      this.movieSimilar = movieData.map( (data) => mapMovieToItem(data));
    })
  }
}
