import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  selectedBike;
  Bikes = [
    {
      imageUrl : 'https://cdn.pixabay.com/photo/2018/07/01/11/42/royal-enfield-3509231__340.jpg',
      name : 'Royal Enfield',
      model : 1997,
      desc : 'Royal Enfield has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'

    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2018/02/14/05/55/wheel-3152176__340.jpg',
      name : 'Ducati',
      model : 1276,
      desc : 'Ducati has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'
    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2017/11/10/17/51/motorcycle-2937057__340.jpg',
      name : 'KTM',
      model : 25,
      desc : 'KTM has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'

    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2017/07/22/18/44/motorcycle-2529593__340.jpg',
      name : 'Harley Davidson',
      model : 624,
      desc : 'Harley Davidson has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'

    }
  ];
  constructor() { }

  ngOnInit() {
  }
  getBike(bike) {
    this.selectedBike = bike;
    console.log(bike);
  }

}
