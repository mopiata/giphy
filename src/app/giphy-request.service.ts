import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Gif } from "./gif";
// import { Observable, of} from "rxjs";
// import { catchError, map, tap } from 'rxjs/operators';
// import { IGifs } from "./interfaceGifs";
// import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {
  gifs=[];
  
  private apiKey: string ="qgpXJFWjh8SOsNfVdXdzlxTJTbu3xhHE";


  constructor(private http:HttpClient) {
    console.log("Service ready!");
   }

  getTrendingGifs(){
    return this.http.get("http://api.giphy.com/v1/gifs/trending?&api_key="+ this.apiKey +"&limit=12");
  }
  
  searchGifs(searchString){
    return this.http.get("http://api.giphy.com/v1/gifs/search?q=" + searchString +"&api_key=" + this.apiKey +"&limit=12&lang=en&fmt=json");
  }
}