import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { GifsComponent } from './gifs/gifs.component';
import { GifDetailsComponent } from './gif-details/gif-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { GiphyRequestService } from "./giphy-request.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchFormComponent,
    GifsComponent,
    GifDetailsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GiphyRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
