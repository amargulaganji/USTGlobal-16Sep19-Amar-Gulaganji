import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  get title() {
    return this.form.get('title');
  }
  get image() {
    return this.form.get('image');
  }
  get desc() {
    return this.form.get('desc');
  }
 form = new FormGroup({
   title : new FormControl('', [Validators.required]),
   image : new FormControl('', [Validators.required]),
   desc : new FormControl('', [Validators.required])
 });
  constructor() { }

  ngOnInit() {
  }
  addmovie(form: NgForm) {
    console.log(form);
  }
}
