import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  images: Object;
  
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getPhotos(100).subscribe(data => {
      this.images = data;
      console.log(this.images);
    });
  }

}
