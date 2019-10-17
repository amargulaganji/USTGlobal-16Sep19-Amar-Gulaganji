import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  selectedLaptop;
  Laptops = [
    {
      imageUrl : 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg',
      name : 'Apple',
      rs : 95000,
      desc: 'Apple Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'
    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2016/06/08/10/35/laptop-1443559__340.jpg',
      name : 'HP',
      rs: 45000,
      desc: 'HP Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256__340.jpg',
      name : 'Dell',
      rs: 40000,
      desc: 'Dell Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

    }, {
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781__340.jpg',
      name : 'Lenovo',
      rs: 70000,
      desc: 'Lenovo Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

    }
  ];
  constructor() { }

  ngOnInit() {
  }
  getLaptop(laptop) {
    this.selectedLaptop = laptop;
    console.log(laptop);
  }

}
