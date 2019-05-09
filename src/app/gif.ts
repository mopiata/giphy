export class Gif {
  id:string;
  imgUrl:string;
  title:string;
  constructor(giphyResponse: any){ 
    this.id=giphyResponse.data.id;
    this.imgUrl = giphyResponse.data.images.original_still.url;
    this.title=giphyResponse.data.title;
  }
}
// export class Gif {
//   id: string;
//   imgUrl: string;
//   title: string;
//   constructor(giphyResponse: any) {
//     this.id = giphyResponse.data.id;
//     this.imgUrl = giphyResponse.data.images.original_still.url;
//     this.title = giphyResponse.data.title;
//   }
// }
