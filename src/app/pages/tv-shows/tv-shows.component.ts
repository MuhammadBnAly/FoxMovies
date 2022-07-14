import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { mapMovieToItem } from 'src/app/models/movie';
import { mapTvShowToItem, Tv } from 'src/app/models/Tv';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  genreId : string | null = null;
  tvShows : Item[] = [];
  searchValue : string ='';

  onTheAirTvShows : Item[]=[];
  topRatedTvShows : Item[]=[];
  popularTvShows  : Item[]=[];

  constructor(private route : ActivatedRoute, private tvService : TvShowsService) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe( ({genreId}) => {
      if(genreId){
        this.genreId = genreId;
        this.TvShowsByGenre(genreId, 1);
      }
      else{
        this.getPagedTvShows(1);
      }
    });


    //
    // this.tvService.getTvShowsTyped('popular').subscribe( (response) =>{
    //   this.popularTvShows = response.map( (movie) => mapTvShowToItem(movie));
    // });
    // //
    // this.tvService.getTvShowsTyped('top_rated').subscribe( (response) =>{
    //   this.topRatedTvShows = response.map( (movie) => mapTvShowToItem(movie));
    // });
    //
    this.tvService.getTvShowsTyped('on_the_air').subscribe( (response) =>{
      this.onTheAirTvShows = response.map( (movie) => mapTvShowToItem(movie));
    });
  }

  TvShowsByGenre(genre_id : string, page : number){
    this.tvService.getTvShowByGenre(genre_id, page).subscribe( (genreTvShows) => {
      this.tvShows = genreTvShows.map( (tv) => mapTvShowToItem(tv));
    })
  }

  getPagedTvShows(page : number , query? : string){
    this.tvService.SearchTvShows(page, query).subscribe( (tvData) => {
      this.tvShows = tvData.map( (tv) => mapTvShowToItem(tv));
    })
  }

  paginate(event: any){
    const pageNumber = event.page + 1;
    if(this.genreId){
      this.TvShowsByGenre(this.genreId, pageNumber);
    }
    else{
      if(this.searchValue){
        this.getPagedTvShows(pageNumber, this.searchValue)
      }else{
        this.getPagedTvShows(pageNumber)
      }
    }
  }

  searchKeyUp(){
    if(this.searchValue){
      this.getPagedTvShows(1, this.searchValue);
    }
  }

}
