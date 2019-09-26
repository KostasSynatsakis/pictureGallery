import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPhotos(items: number) {
    return this.http.get('https://picsum.photos/v2/list?limit=' +items);
  }
}
