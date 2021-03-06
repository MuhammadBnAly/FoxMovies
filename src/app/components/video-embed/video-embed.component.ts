import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {

  @Input() site: string='';
  @Input() key: string | null = '';

  videoUrl: SafeResourceUrl = '';

  constructor(private Sanitizer : DomSanitizer) { }


  ngOnInit(): void {
    switch(this.site){
      case 'YouTube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/'+ this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.Vimeo.com/'+ this.key);
        break;
    }
  }
 

  getSafeUrl(url:string){
    return this.Sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}
