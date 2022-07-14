import { Genre } from "./genre";
import { Item } from "./Item"

export interface TvShowsDto{
    page : number,
    results : Tv[],
    total_results : number,
    total_pages : number
}

export interface Tv{
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_country: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path:string,
    first_air_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    name:string,
    genres: Genre[];
}

export interface TvShowVideoDto{
    id: number,
    results : TvShowVideo[];
}

export interface TvShowVideo{
    name : string,
    key : string,
    site : string
}

export interface TvShowImagesDto{
    id :number,
    backdrop : TvShowImage[]
}

export interface TvShowImage{
    file_path:string,
    vote_average : number,
    vote_count : number
}

export interface TvShowCredits{
    id:number,
    cast : {
        name:string,
        profile_path:string,
    }[],
    // crew : {
    //     name:string,
    //     profile_path : string,
    //     job : string
    // }[]
}


  export const mapTvShowToItem = (tvShow: Tv): Item => {
    return {
      id: tvShow.id,
      title: tvShow.title,
      poster_path: tvShow.poster_path,
      vote_average: tvShow.vote_average,
      backdrop_path: tvShow.backdrop_path,
      vote_count: tvShow.vote_count,
      release_date: tvShow.first_air_date,
      overview: tvShow.overview,
      routePath: '/tvshow/' + tvShow.id,
      name : tvShow.original_name
    };
  };
  