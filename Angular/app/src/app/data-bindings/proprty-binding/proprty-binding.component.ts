import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprty-binding',
  templateUrl: './proprty-binding.component.html',
  styleUrls: ['./proprty-binding.component.css']
})
export class ProprtyBindingComponent implements OnInit {
  name = 'john';
  imgUrl = 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg';
  address = 'Bijapur - 586101';
  colorName = 'red';
  isActive = false;
  isRound = false;
  colspanvalue = '2';
  constructor() { }

  ngOnInit() {
    setInterval (() => {
      this.colorName = 'blue';
      this.isActive = !this.isActive;
      this.isRound = !this.isRound;
    }, 2000);
  }

}
