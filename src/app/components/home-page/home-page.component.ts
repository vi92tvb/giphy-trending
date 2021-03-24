import { Component, OnInit } from '@angular/core';
import { TRENDING_DATA } from 'src/app/core/services/giphy/giphy-trending.constant';
import { GiphyTrendingService } from 'src/app/core/services/giphy/giphy-trending.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  trendingGifs: any; // data
  currentOffset: number = 0; // offset

  isLoading: boolean = true; // loader

  clickedImage: string = ""; // source of image
  isOpenModal: boolean = false;

  constructor(
    private giphyTrending: GiphyTrendingService
  ) { }

  ngOnInit(): void {
    this.giphyTrending.getTrending(this.currentOffset)
    .subscribe(
      (data: any) => {
        this.isLoading = false;
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
    let newData: any= [];
    this.isLoading = true;
    this.giphyTrending.getTrending(this.currentOffset)
    .subscribe(
      (data: any) => {
        this.isLoading = false;
        newData = data['data'];
        this.trendingGifs = [...this.trendingGifs, ...newData]
      },
      (err) =>  {
                  console.log(err);
                  this.isLoading = false;
                }
    )
    this.increaseOffset();
  }

  onImage(src: string) {
    console.log(src);
    this.clickedImage = src;
    this.isOpenModal = true;
  }

  onClose() {
    this.isOpenModal = false;
  }

}
