// gifRequest() {
  //   interface ApiResponse {
  //     id: string;
  //     imgUrl: string;
  //     title: string;
  //   }

  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>("http://api.giphy.com/v1/gifs/search?q=" + this.searchString + "&api_key=" + this.apiKey + "&limit=2&lang=en&fmt=json").toPromise().then(response => {

  //       this.gif.id=response.id;
  //       this.gif.imageUrl=response.imgUrl;
  //       this.gif.title=response.title;
  //       console.log("success got data", response)

  //       resolve()
  //     }, error => {
  //       this.gif.id = "noId";
  //       this.gif.imageUrl = "#";
  //       this.gif.title = "noTitle";

  //       console.log("error")

  //       reject(error)
  //     }
  //     )
  //   })
  //   return promise;
  // }

  // gifRequest(){
  //   this.http.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchString + "&api_key=" + this.apiKey + "&limit=2&lang=en&fmt=json")
  //     .subscribe((res:any[])=>{
  //       console.log(res); 

  //   res.data.forEach((giphy)=>{
  //     this.gifResults.push(new Gif(giphy.id, giphy.images.original.url, giphy.title));
  //     // console.log(giphy.images.original.url);
  //     })
  //   console.log(this.gifResults);
  //   return this.gifResults;

  //   })
  // }
  // // gifRequest() {
  // // return this.http.get("http://api.giphy.com/v1/gifs/trending?&api_key=" + this.apiKey + "&limit=2&lang=en&fmt=json")
  // //   .subscribe((data) => {
  // //     let res = data[0];
  // //     console.log(data.data[0].id);
  // //     console.log(data);
  // //     createImageBitmap(data.data[0].images)
  // //   })
  // }



  // gifRequest() {

  //   interface ApiResponse {
  //     id:string;
  //     imgUrl:string;
  //     title:string;
  //   }

  //   return this.http.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchString + "&api_key=" + this.apiKey + "&limit=2&lang=en&fmt=json")
  //     .subscribe((res)=>{
  //       // console.log(res.data.id);
  //       // console.log(res);
  //       res.data[0].forEach((dataItem) => {
  //         console.log(id);
  //       }
  //       )
  //     })   
  // }



  // gifRequest(){
  //   return this.http.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchString + "&api_key=" + this.apiKey + "&limit=2&lang=en&fmt=json")
  //     .subscribe((res:any[])=>{
  //       console.log(res);     
  //     })
  // }


  // gifRequest():Observable<Gif[]>{
  //   return this.http.get<Gif[]>("http://api.giphy.com/v1/gifs/search?q="+this.searchString+"&api_key="+this.apiKey+"&limit=2&lang=en&fmt=json/data")
  //     .pipe(
  //       map()
  //     )

  //   this.httpClient.get(this.baseUrl + '/products').subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // submitSearch(searchString){
  //   this.searchString=searchString;
  //   console.log(this.searchString);
  //   this.formValues.resetForm();
  //   this.giphyRequestService.searchGifs(this.searchString)
  //     .subscribe(giphys => {
  //       this.gifs = giphys.data;
  //       console.log(this.gifs);
  //     })
  // }