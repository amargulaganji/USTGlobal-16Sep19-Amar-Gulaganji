import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
value = '';
movies;
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
  }
  searchMovie() {
    console.log(this.value);
    this.getMovie();
  }
getMovie() {
  this.http.get<any>(`http://www.omdbapi.com/?s=${this.value}&apikey=641e62e1`).subscribe( (data) => {
    console.log(data);

    this.movies = data.Search;
  }, error => {
    console.log(error);
  }, () => {
    console.log('Movies got Successfully');
  });
}
}
