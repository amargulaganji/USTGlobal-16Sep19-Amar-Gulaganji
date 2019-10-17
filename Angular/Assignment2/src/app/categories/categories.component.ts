import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  cnews;
  value = 'general';
  constructor(public http: HttpClient) {
    this.getCNews(this.value);
   }

 
 

  getCNews(value) {
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&category=${value}&apiKey=cda9552f22e7431f8e4b699d5c385286`).subscribe((data) => {
          this.cnews = data.articles;
          console.log(data);
          
      }, error => {
          console.log(error);
      }, () => {
          console.log('News got Successfully');
      });
  }
}
