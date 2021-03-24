import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, LIMIT } from './giphy-trending.constant';

@Injectable({
  providedIn: 'root'
})
export class GiphyTrendingService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getTrending(offset: number) {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${offset}`);
  }
}
