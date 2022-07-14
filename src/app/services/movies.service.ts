import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImagesDto, MovieVideoDto } from '../models/movie';
import { switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {GenresDto} from '../models/genre'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string='https://api.themoviedb.org/3';
  apiKey: string = '6c1613d85db1fa5a286fffd43021ee5c';
  constructor(private http : HttpClient) { }

  getMovies(movieType: string='movie/latest', count:number=12) {
    //4
    return this.http.get<MovieDto>(`${this.baseUrl}/${movieType}?api_key=${this.apiKey}`)
    .pipe( switchMap( res => {
      return of(res.results.slice(0,count));
    }));
    //3
    //return this.http.get(`${this.baseUrl}/movie/${movieType}?api_key=${this.apiKey}`);
    //2
    //return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`);
    //1
    //return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6c1613d85db1fa5a286fffd43021ee5c')
  }

pageMovies(page:number) {
  //4
  return this.http.get<MovieDto>(`${this.baseUrl}/movie/top_rated?page=${page}&api_key=${this.apiKey}`)
  .pipe( switchMap( res => {
    return of(res.results.slice(0,18));
  }));
}

getMovie(id:string){
  return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
}

// video
getMovieVideo(id:string){
  return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe( 
      switchMap( (res) => {
      return of(res.results);
    }));
  }

// images
getMovieImages(id:string){
  return this.http.get<MovieImagesDto>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
    .pipe( 
      switchMap( (res) => {
      return of(res.backdrops);
    }));
  }

    //Genres
    getGenres(){
      return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
        .pipe( switchMap( (res) => {
          return of(res.genres);
        }));
    }

  // genres moves
  getGenreMovies(id:string, page : number){
    return this.http.get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${id}&page=${page}&api_key=${this.apiKey}`)
      .pipe( switchMap( (res) => {
        return of(res.results);
      }))
    }

  // search  
  getSearchMovies(page:number, query?:string ){
    const uri = query ? '/search/movie' : '/movie/popular';

      return this.http.get<MovieDto>(`${this.baseUrl}${uri}?query=${query}&page=${page}&api_key=${this.apiKey}`)
        .pipe( 
          switchMap( (res) => {
            return of(res.results.slice(0, 18));
        }));
    }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 18));
        })
      );
  }
//
getMovieCredits(id:string){
  return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
    // .pipe( 
    //   switchMap( (res) => {
    //   return of(res.cast);
    // }));
  }

  getMovieSimilar(id:number){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe( 
        switchMap( (res) => {
        return of(res.results.slice(0,12));
      }));
    }
}