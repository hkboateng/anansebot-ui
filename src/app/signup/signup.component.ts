import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import {SignupRequest, SignupResponse} from './signup';
import { SignupService } from './signupService.service';
import {HeaderService} from '../header/headerService.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() redirect: EventEmitter<string> = new EventEmitter();
  pageName = 'Sign Up';
  signupError = false;
  errorMessage = undefined;
  register: SignupRequest = null;
  signupGrp = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phoneNumber: new FormControl(''),
    emailAddress: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
    cf_password: new FormControl('', Validators.required)
  });
  constructor(private signService: SignupService,private router: Router, private headerService: HeaderService) {
    this.headerService.setCurrentPage(this.pageName);
   }

  ngOnInit() {
  }

  onSubmit(signup): void{
    this.register = new SignupRequest(signup);
    this.register.requestType = 'register';
    const t = this.signService.register(this.register).subscribe(
      response => this.processResponse(response),
      error => console.log(error),
      () => console.log('test')
    );
  }

  processResponse(response: SignupResponse) {
    if (response.status) {
      this.router.navigateByUrl('/login');
    } else {
      console.log(response.responseMessage);
      this.signupError = true;
      this.errorMessage = response.responseMessage;
      return;
    }
  }
  onReset() {
    this.signupGrp.reset();
  }

}
