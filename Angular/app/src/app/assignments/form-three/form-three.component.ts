import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerData(form3: NgForm) {
    console.log(form3.value);
  }

}
