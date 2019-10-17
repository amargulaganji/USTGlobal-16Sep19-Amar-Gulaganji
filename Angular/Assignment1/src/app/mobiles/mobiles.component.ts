import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  selectedMobile;
  Mobiles = [
    {
      imageUrl : 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737__340.jpg',
      name : 'Apple',
      rs : 95000,
      desc: 'Apple With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731__340.jpg',
      name : 'Samsung',
      rs : 95000,
      desc: 'Samsung Galaxy With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2015/11/17/21/46/navigation-1048294__340.jpg',
      name : 'Moto',
      rs : 95000,
      desc: 'Moto With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2016/11/29/12/30/android-1869510__340.jpg',
      name : 'Oneplus',
      rs : 95000,
      desc: 'Oneplus With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  getMobile(mobile) {
    this.selectedMobile = mobile;
    console.log(mobile);
  }
}
