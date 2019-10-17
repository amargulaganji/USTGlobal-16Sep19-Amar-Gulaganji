import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cnews;
  search = '';
  constructor(public http: HttpClient) {
    
   }

  getCNews() {
    
    this.http.get<any>(`https://newsapi.org/v2/everything?q=${this.search}&from=2019-10-12&to=2019-10-12&sortBy=popularity&apiKey=cda9552f22e7431f8e4b699d5c385286`).subscribe((data) => {
          this.cnews = data.articles;
          console.log(data);
          
          
      }, error => {
          console.log(error);
      }, () => {
          console.log('News got Successfully');
      });
  }

}
