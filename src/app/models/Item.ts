import { Genre } from "./genre";

export interface Item{
    // routePath?: string;
    // backdrop_path: string,
    // overview: string,
    // id: number,
    // poster_path:string,
    // release_date: string,
    // title: string,
    // vote_average: number,
    // vote_count: number,

    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    release_date: string;
    overview: string;
    routePath?: string;
    name : string;
    // name:string,
    //
    // original_language: string,
    // genre_ids: number[],
    // original_title: string,
    // popularity: number,
    // video: boolean,
    // // others
    // budget: number,
    // revenue :number,
    // runtime : number,
    // status:string,
    // genres : Genre[],
    // homepage:string,
}