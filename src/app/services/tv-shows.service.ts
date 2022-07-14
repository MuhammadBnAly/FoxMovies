import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';
import { Tv, TvShowCredits, TvShowImagesDto, TvShowsDto, TvShowVideoDto } from '../models/Tv';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  baseUrl: string='https://api.themoviedb.org/3';
  apiKey: string = '6c1613d85db1fa5a286fffd43021ee5c';


  constructor(private http : HttpClient) { }

  //get TV shows for item-banner
  // top_rated , 
  getTvShowsTyped(category: string){
    return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${category}?api_key=${this.apiKey}`)
    .pipe( switchMap( res => {
      return of(res.results.slice(0, 12));
    }));
  }

  // get Tv Shows for a page
  getCategoryTvShows(category: string, page:number){
    return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${category}?page=${page}&api_key=${this.apiKey}`)
    .pipe( switchMap( res => {
      return of(res.results.slice(0, 18));
    }));
  }

  // get a tv 
  getTvShow(tv_id:number){
    return this.http.get<Tv>(`${this.baseUrl}/tv/${tv_id}?api_key=${this.apiKey}`)
  }

  // get tv show Videos
  getTvShowVideos(tv_id:number){
    return this.http.get<TvShowVideoDto>(`${this.baseUrl}/tv/${tv_id}/videos?api_key=${this.apiKey}`)
    .pipe( switchMap( res => {
      return of(res.results);
    }));
  }

    // get tv show Images
    getTvShowImages(tv_id:number){
      return this.http.get<TvShowImagesDto>(`${this.baseUrl}/tv/${tv_id}/images?api_key=${this.apiKey}`)
      .pipe( switchMap( res => {
        return of(res.backdrop);
      }));
    }

    // get tv show Credits
    getTvShowCredits(tv_id:number){
      return this.http.get<TvShowCredits>(`${this.baseUrl}/tv/${tv_id}/credits?api_key=${this.apiKey}`)
      // .pipe( switchMap( res => {
      //   return of(res.crew);
      // }));
    }

    // get tv show Similar
    getTvShowSimilars(tv_id:number){
      return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${tv_id}/similar?api_key=${this.apiKey}`)
      .pipe( switchMap( res => {
        return of(res.results.slice(0, 12));
      }));
    }

    // get tv Genres
    getTvShowGenres(){
      return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe( switchMap( res => {
        return of(res.genres);
      }));
    }
    // get tv Genres
    getTvShowByGenre(id : string , page : number){
      return this.http.get<TvShowsDto>(`${this.baseUrl}/discover/tv?with_genres${id}&page=${page}&api_key=${this.apiKey}`)
      .pipe( switchMap( res => {
        return of(res.results);
      }));
    }

    // tv Search
    SearchTvShows(page : number, query? :string){
      const uri = query ? '/search/tv' : '/tv/popular';
      return this.http.get<TvShowsDto>(`${this.baseUrl}${uri}?query=${query}&page=${page}&api_key=${this.apiKey}`)
      .pipe( switchMap( res => {
        return of(res.results);
      }));
    }
  
}
