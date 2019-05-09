import { Component, OnInit, ViewChild } from '@angular/core';
import { GiphyRequestService } from "../giphy-request.service";
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @ViewChild('searchForm') formValues;
  
  private searchString="";
  private gifs:Object;

  constructor(private giphyRequestService: GiphyRequestService) { }

  submitSearch(){
    
    this.giphyRequestService.searchGifs(this.searchString)
      .subscribe(giphys => {
        this.gifs = giphys.data;
        console.log(this.gifs);
      })
    this.searchString = "";
    this.formValues.resetForm();
  }

  ngOnInit() {
    console.log(this.searchString);
  }
}
