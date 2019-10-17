import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{
  users;
  selectedUser;
  today = new Date();
  constructor(public service: UserService) {
    console.log('Constructor is Executed');

    this.getData();
   }

  ngOnInit() {
    console.log('ngOnit is Executed');
  }

  ngDoCheck() {
    console.log('ngDocheck is Executed');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is Executed');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is Executed');

  }
  ngOnDestroy() {
    console.log('ngOnDestroy is Executed');
    
  }
  loginData(form: NgForm) {
    // console.log(form);
    console.log(form.value);
    this.service.postUser(form.value).subscribe(data => {
      console.log(data);
      this.getData();

    }, error => {
      console.log(error);
    }, () => {
      console.log('data posted Successfully');
    });
  }
  getData() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;

    }, error => {
      console.log(error);
    }, () => {
      console.log('data got Successfully');
    } );
  }

  deleteData(user) {
    console.log(user);
    this.service.deleteUser(user.id).subscribe(data => {
      console.log(data);
      this.getData();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Data deleted Successfully');
    });
  }

  selectUser(user) {
    console.log(user);
    this.selectedUser = user;
  }
  updateData(form) {
    console.log(form.value);
    this.service.updateUser(form.value.id, form.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Data Updated Successfully');
    });
  }
}
