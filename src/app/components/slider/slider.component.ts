import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
      //transition('* => void', [animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {

  readonly imageSize=IMAGE_SIZES;

  //@Input() items: any;
  @Input() items : Item[] =[];
  @Input() isBanner : boolean = false;

  currentSlideIndex : number = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.isBanner)
    {
      setInterval( ()=>{
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
        }, 4000);
    }
  }

}


