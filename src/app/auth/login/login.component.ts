import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {} as UserLogin;
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }
  clearForm(loginForm) {
    console.log(loginForm)
    this.model = {} as UserLogin;
  }
  get diagnostic(){return JSON.stringify(this.model)}

  constructor() { }

  ngOnInit() {
  }

}
