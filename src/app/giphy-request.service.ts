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
  private searchString:string;
  private apiKey: string ="qgpXJFWjh8SOsNfVdXdzlxTJTbu3xhHE";


  constructor(private http:HttpClient) {
    console.log("Service ready!");
    this.searchString="happy";
   }

  getTrendingGifs(){
    return this.http.get("http://api.giphy.com/v1/gifs/trending?&api_key="+ this.apiKey +"&limit=24");
  }
}