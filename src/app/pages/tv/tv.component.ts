import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { Movie } from 'src/app/models/movie';
import { mapTvShowToItem, Tv, TvShowCredits, TvShowImage, TvShowImagesDto, TvShowVideo } from 'src/app/models/Tv';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { IMAGE_SIZES } from '../../constants/image-sizes'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, OnDestroy {

  tvShow : Tv | null = null;
  tvShows : Tv[] = [];
  tvShowBanner : Item | null = null;
  tvShowVideos : TvShowVideo[] =[];
  tvShowImages : TvShowImage[] = [];
  tvShowCredits : TvShowCredits | null= null;
  movieSimilar : Tv[] = [];
  imageSize = IMAGE_SIZES;

  ngOnDestroy(){
    console.log("Component Destroyed"); 
  }

  constructor(private route : ActivatedRoute, private tvService: TvShowsService) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe( ({id}) =>{
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getMovieSimilar(id);
    })
  }

  getTvShow(id : number){
    this.tvService.getTvShow(id).subscribe((data) => {
      this.tvShowBanner = mapTvShowToItem(data);
      this.tvShow = data;
    })
  }
  getTvShowVideos(id: number) {
    this.tvService.getTvShowVideos(id).subscribe((tvShowVideosData) => {
      this.tvShowVideos = tvShowVideosData;
    });
  }

  getTvShowImages(id: number) {
    this.tvService.getTvShowImages(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowCredits(id: number) {
    this.tvService.getTvShowCredits(id).subscribe((tvShowCreditsData) => {
      this.tvShowCredits = tvShowCreditsData;
    });
  }

  getMovieSimilar(id : number){
    this.tvService.getTvShowSimilars(id).subscribe( (movieData) =>{
      this.movieSimilar = movieData;
    })
  }

}
