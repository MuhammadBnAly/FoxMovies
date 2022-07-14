import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { POSTER_SIZES } from '../../constants/image-sizes';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemData: Item | null = null;

  posterSizes = POSTER_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
