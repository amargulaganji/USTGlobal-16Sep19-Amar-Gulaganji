import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { MoviesComponent } from './movies/movies.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { HeaderComponent } from './header/header.component';
import { CarChildComponent } from './cars/car-child/car-child.component';
import { RouterModule } from '@angular/router';
import { BikeChildComponent } from './bikes/bike-child/bike-child.component';
import { HomeComponent } from './home/home.component';
import { MovieChildComponent } from './movies/movie-child/movie-child.component';
import { LaptopChildComponent } from './laptops/laptop-child/laptop-child.component';
import { MobileChildComponent } from './mobiles/mobile-child/mobile-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BikesComponent,
    MoviesComponent,
    LaptopsComponent,
    MobilesComponent,
    HeaderComponent,
    CarChildComponent,
    BikeChildComponent,
    HomeComponent,
    MovieChildComponent,
    LaptopChildComponent,
    MobileChildComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'bikes', component: BikesComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'laptops', component: LaptopsComponent},
      {path: 'mobiles', component: MobilesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
