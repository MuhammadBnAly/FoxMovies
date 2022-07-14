import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //searchValue : string | null = null;
  constructor() { }
//  constructor(private movieService : MoviesService, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchKeyUp(){    
  }

}
