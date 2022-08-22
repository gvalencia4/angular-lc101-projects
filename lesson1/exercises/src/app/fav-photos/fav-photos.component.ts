import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cape_Royal_Sunset.jpg/1920px-Cape_Royal_Sunset.jpg';
  image3 = 'https://www.tripsavvy.com/thmb/YAGkm1UoHJKSAbzn8KANU3GYGQM=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv()/mount-rainier-national-park-945381454-fd1957f1232d499f986ca4e03e257431.jpg';

  constructor() { }

  ngOnInit() {
  }

}