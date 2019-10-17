import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
    selector : 'app-home',
    templateUrl : '/home.component.html',
    styleUrls : ['/home.component.css']


})

export class HomeComponent {
    hnews;
    snews;
    enews;

    constructor(private http: HttpClient) {
        this.getHNews();
        this.getENews();
        this.getSNews();
    }
    getHNews() {
      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=cda9552f22e7431f8e4b699d5c385286').subscribe((data) => {
            this.hnews = data.articles;
            console.log(data);
        }, error => {
            console.log(error);
        }, () => {
            console.log('News got Successfully');
        });
    }
    getENews() {
      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cda9552f22e7431f8e4b699d5c385286').subscribe((data) => {
            this.enews = data.articles;
            console.log(data);
        }, error => {
            console.log(error);
        }, () => {
            console.log('News got Successfully');
        });
    }
    getSNews() {
      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cda9552f22e7431f8e4b699d5c385286').subscribe((data) => {
            this.snews = data.articles;
            console.log(data);
        }, error => {
            console.log(error);
        }, () => {
            console.log('News got Successfully');
        });
    }

}
