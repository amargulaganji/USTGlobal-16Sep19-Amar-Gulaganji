import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

registerData(form1: NgForm) {
  console.log(form1.value);
}
}