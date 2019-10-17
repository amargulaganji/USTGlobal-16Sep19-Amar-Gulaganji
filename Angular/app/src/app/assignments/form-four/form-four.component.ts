import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.css']
})
export class FormFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  registerData(form2: NgForm) {
    console.log(form2.value);
  }

}
