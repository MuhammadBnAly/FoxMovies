import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieDto } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { } from '../../shared/header/header.component'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = [];
  moviesDto : MovieDto | null = null;
  genreId : string | null= null;

  searchValue : string | null = null;

  constructor(private movieService:MoviesService,  private route:ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.movieService.pageMovies(2).subscribe((moviesData)=>{
  //     this.movies = moviesData;
  //   });
  // }

  ngOnInit() :void{
    this.route.params.pipe( take(1) ).subscribe( ({genreId}) =>{
      if (genreId){
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      }else{
        this.getPagedMovies(1);
      }
    })
  }

  // getPagedMovies(page:number){
  //   this.movieService.pageMovies(page).subscribe((movie)=>{
  //     this.movies = movie;
  //   });
  // }

  getPagedMovies(page:number, searchKeyWord? : string){
    this.movieService.getSearchMovies(page, searchKeyWord).subscribe((moviesData)=>{
      this.movies = moviesData;
    });
  }

  getMoviesByGenre(genreId : string, page : number){
    this.movieService.getGenreMovies(genreId, page).subscribe((movie)=>{
      this.movies = movie;
    });
  }

  paginate(event : any){
    const pageNumber = event.page+1;
    if (this.genreId){
      this.getMoviesByGenre(this.genreId, pageNumber);
    }
    else{
      if(this.searchValue){
        this.getPagedMovies(pageNumber, this.searchValue)
      }
      else{
      this.getPagedMovies(pageNumber);
      }
    }
  }

  searchKeyUp(){
    if(this.searchValue){
      this.getPagedMovies(1, this.searchValue)
    }
  }


}
