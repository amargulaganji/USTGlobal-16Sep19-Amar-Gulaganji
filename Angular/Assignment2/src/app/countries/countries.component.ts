import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  cnews;
  value = 'in';
  constructor(public http: HttpClient) {
    this.getCNews(this.value);
    
   }

  getCNews(value) {
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${value}&apiKey=cda9552f22e7431f8e4b699d5c385286`).subscribe((data) => {
          this.cnews = data.articles;
          console.log(data);
          
      }, error => {
          console.log(error);
      }, () => {
          console.log('News got Successfully');
      });
  }
  
}
