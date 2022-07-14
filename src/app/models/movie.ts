import { Item } from "./Item"

export interface Movie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path:string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    name:string,
    // others
    budget: number,
    revenue :number,
    runtime : number,
    status:string,
    genres : Genre[],
    homepage:string,
    production_countries: production_countries[],

}

export interface MovieDto{
    Page:number,
    results:Movie[],
    total_results:number,
    total_pages:number,
}

//
export interface Genre{
    id : number,
    name : string
}

export interface production_countries{
    name: string,
}

// videos 
export interface MovieVideoDto{
    int : number,
    results : MovieVideo[]
}

export interface MovieVideo{
    key:string,
    site:string
}

// images
export interface MovieImagesDto{
    id : number,
    backdrops : MovieImage[],
    //posters : MoviePoster[]
}

export interface MovieImage{
    file_path : string,
    height : number,
    width : number,
    aspect_ratio : number,
    vote_average : number,
    vote_count : number
}

// export interface MoviePoster{
//     file_path : string,
//     height : number,
//     width : number,
//     aspect_ratio : number,
//     vote_average : number,
//     vote_count : number
// }

//Credits
export interface MovieCredits{
    //id : number,
    //cast : MovieCast[],
    cast : {    
        original_name : string,
        profile_path : string
    } [],
    //crew : MovieCrew[]
}

export interface MovieCast{
    original_name : string,
    profile_path : string
}

export interface MovieCrew{
    original_name : string,
    profile_path : string
    job : string
}

export const mapMovieToItem = (movie: Movie): Item => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      backdrop_path: movie.backdrop_path,
      vote_count: movie.vote_count,
      release_date: movie.release_date,
      overview: movie.overview,
      routePath: '/movie/' + movie.id,
      name : movie.original_title
    };
  };