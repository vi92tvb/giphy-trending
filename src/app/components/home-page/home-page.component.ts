import { Component, OnInit } from '@angular/core';
import { TRENDING_DATA } from 'src/app/core/services/giphy/giphy-trending.constant';
import { GiphyTrendingService } from 'src/app/core/services/giphy/giphy-trending.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  trendingGifs: any;

  constructor(
    private giphyTrending: GiphyTrendingService
  ) { }

  getTrending(){
    this.giphyTrending.getTrending()
    .subscribe(
      (data: any) => {
        console.log(data);
        this.trendingGifs = data['data'];
        // this.router.navigateByUrl('/home');
      },
      (err) =>  {
                  /* this.onLoginFail(); */
                  console.log(err);
                }
    )
  }

  ngOnInit(): void {
    this.getTrending();
  }

}
