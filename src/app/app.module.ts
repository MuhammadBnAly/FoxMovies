import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './pages/movie/movie.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {CarouselModule} from 'primeng/carousel';
import { GenresComponent } from './pages/genres/genres.component';
import { TvComponent } from './pages/tv/tv.component';
import {InputTextModule} from 'primeng/inputtext';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAec7hZbJO_tfYsNR2hrFRQ5tQ_sT08u2A",
  authDomain: "movie-app-f5b75.firebaseapp.com",
  projectId: "movie-app-f5b75",
  storageBucket: "movie-app-f5b75.appspot.com",
  messagingSenderId: "68084578269",
  appId: "1:68084578269:web:6b0af09061c80debbe6834",
  measurementId: "G-FDDW8P7Y7E"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenresComponent,
    TvComponent,
    TvShowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    CarouselModule,
    InputTextModule,
    
    // AngularFireModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
