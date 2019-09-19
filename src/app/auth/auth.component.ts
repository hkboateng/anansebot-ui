import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {AuthenticateService} from './authenticate.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, public authService: AuthenticateService) { }

  ngOnInit() {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  isAuthenticated(): boolean {
    const isAuth = this.authService.authenticated;
    console.log(isAuth)
    return isAuth;
  }

}
