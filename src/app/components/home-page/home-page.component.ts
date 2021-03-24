import { Component, OnInit } from '@angular/core';
import { TRENDING_DATA } from 'src/app/core/services/giphy/giphy-trending.constant';
import { GiphyTrendingService } from 'src/app/core/services/giphy/giphy-trending.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  trendingGifs: any; //data
  currentOffset: number = 0; //offset
  isFinished: boolean = false; //check if end data

  constructor(
    private giphyTrending: GiphyTrendingService
  ) { }

  ngOnInit(): void {
    this.giphyTrending.getTrending(this.currentOffset)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.trendingGifs = data['data'];
      },
      (err) =>  {
                  console.log(err);
                }
    )    
    this.increaseOffset();
  }

  increaseOffset() {
    this.currentOffset = this.currentOffset + 12;
  }

  onLoadMore() {
    this.giphyTrending.getTrending(this.currentOffset)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.trendingGifs = data['data'];
      },
      (err) =>  {
                  console.log(err);
                }
    )
    this.increaseOffset();
  }

}
