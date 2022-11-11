import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIConfig } from '../APIConfig';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;
  registerForm: any;
  IsForRegister: boolean = false;
  regsubmitted = false;

  constructor(private frmBuilder: FormBuilder, private loginService: LoginService,
    private router: Router) { }

  createLoginForm() {
    this.loginForm = this.frmBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createRegisterForm() {
    this.registerForm = this.frmBuilder.group({
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  changeView(isforreg: boolean) {
    this.IsForRegister = isforreg;
    if (isforreg) {
      this.createRegisterForm();
    }
    else {
      this.createLoginForm();
    }
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  
  get lfrm() {
    return this.loginForm.controls;
  }

  get rfrm() {
    return this.registerForm.controls;
  }

  Login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // alert(JSON.stringify(this.loginForm.value));
    this.loginService.UserLogin(JSON.stringify(this.loginForm.value)).subscribe(z => {
      if (z.toString() != '') {
        //Decode JWT token and check user role
        var decodedJwtData = APIConfig.DecodeJWTToken(z.toString());
        if (decodedJwtData != '') {
          if (decodedJwtData.UserRole == "User") {
            // localStorage.setItem('role', 'user');
            localStorage.setItem('apitoken', z.toString());
          }
          else if (decodedJwtData.UserRole == "Admin") {
            alert("Admin Can't Logged in");            
          }
        }
        window.location.reload();
      }
      else {
        alert("Something went wrong in API");
      }
    }, err => {
      if (err.status == 400) {
        alert(err.error);
      }
      else {
        alert("Login Failed");
      }
    })
  }

  Register() {
    this.regsubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loginService.UserRegister(JSON.stringify(this.registerForm.value)).subscribe(z => {
      if (z.toString() == '1') {
        alert("User is registered successfully");
        this.changeView(false);
      }
      else if (z.toString() == '0') {
        alert("Username is already exist");
        return;
      }else{
        alert("Something went wrong in API");
      }
    }, err => {
      if (err.status == 400) {
        alert(err.error);
      }
      else {
        alert("Registration Failed");
      }
    })

  }

}
