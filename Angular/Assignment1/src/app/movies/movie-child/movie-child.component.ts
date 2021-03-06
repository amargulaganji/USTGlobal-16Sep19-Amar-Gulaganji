import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-child',
  templateUrl: './movie-child.component.html',
  styleUrls: ['./movie-child.component.css']
})
export class MovieChildComponent implements OnInit {
  @Input() movie: {imageUrl: string, name: string, rating: string, desc: string};

  constructor() { }

  ngOnInit() {
  }

}
