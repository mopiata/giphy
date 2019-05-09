import { Component, OnInit } from '@angular/core';
import { Gif } from "../gif";
import { GiphyRequestService } from "../giphy-request.service";

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  public gifs:Object;

  constructor(private giphyRequestService:GiphyRequestService) {

   }

  ngOnInit() {
    this.giphyRequestService.getTrendingGifs()
      .subscribe(giphys =>{
        this.gifs=giphys.data;
        this.gifs.map(res => console.log(res.images.downsized_medium.url));
      })
    
  }

}
