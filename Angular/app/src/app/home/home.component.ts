import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
    selector : 'app-home',
    templateUrl : '/home.component.html',
    styleUrls : ['/home.component.css']


})

export class HomeComponent {
    news;
    constructor(private http: HttpClient) {
        this.getNews();
    }
    getNews() {
      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=cda9552f22e7431f8e4b699d5c385286').subscribe((data) => {
            this.news = data.articles;
            console.log(data);
        }, error => {
            console.log(error);
        }, () => {
            console.log('News got Successfully');
        });
    }

}
