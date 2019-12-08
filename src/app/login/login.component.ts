import { Component, OnInit } from '@angular/core';
import {LoginUser, LoginRequest, LoginResponse} from './loginUser';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import {HeaderService} from '../header/headerService.service';
import {AuthenticateService} from '../auth/authenticate.service';
import {Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  loginResponse: LoginResponse = null;
  hasError = false;
  isSuccess = false;
  responseMessage = '';
  loginGrp = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passWd: new FormControl('', Validators.required)
  });
  constructor(private headerService: HeaderService,
              public authService: AuthenticateService,
              public router: Router) {
    this.headerService.setCurrentPage(this.pageTitle);
  }
  loginUser: LoginRequest = null;

  getAlertClass(): string {
    return this.loginResponse != null && this.loginResponse.hasError ? 'alert-danger' : !this.loginResponse.hasError ? 'alert-info' : '';
  }
  ngOnInit() {
  }
  onSubmit(loginBo) {
    this.loginUser = new LoginRequest(loginBo.userName, loginBo.passWd);
    this.resetPage();
    this.authService.authenticate(this.loginUser).subscribe(
      response => {
        this.loginResponse = response;
        this.isSuccess = response.status;
        if(this.loginResponse.status){
          this.navigateAfterLogin();
        }
        
      }
    );
  }

  navigateAfterLogin(){
    const loggedin = this.authService.getAuthentication();
    if(this.loginResponse.status){
      this.router.navigate(['signup']);
    }
  }
  navigateSignUp(){
    this.router.navigate(['signup']);
  }

  resetPage(){
    this.loginGrp.reset();
    this.hasError = false;
    this.isSuccess = false;
  }
}
