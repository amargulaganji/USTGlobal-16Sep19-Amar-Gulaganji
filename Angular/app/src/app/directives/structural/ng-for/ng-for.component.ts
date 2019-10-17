import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  Products = [
    {
      image : 'https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921__340.jpg',
      name : 'Grapes',
      price : 25
    }, {
      image : 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__340.jpg',
      name : 'Orange',
      price : 25
    }, {
      image : 'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__340.jpg',
      name : 'Strawberry',
      price : 25
    }];
  constructor() { }

  ngOnInit() {
  }


}
