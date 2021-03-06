import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-child',
  templateUrl: './mobile-child.component.html',
  styleUrls: ['./mobile-child.component.css']
})
export class MobileChildComponent implements OnInit {
  @Input() mobile: {imageUrl: string, name: string, rs: number, desc: string};

  constructor() { }

  ngOnInit() {
  }

}
