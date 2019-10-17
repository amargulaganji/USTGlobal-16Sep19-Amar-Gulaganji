import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registerData(form2: NgForm) {
    // console.log(form);
    console.log(form2.value);
  }

}
