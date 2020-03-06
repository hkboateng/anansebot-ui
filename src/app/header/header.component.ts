import { Component, OnInit, AfterViewInit , ViewChild, Input } from '@angular/core';
import {AuthenticateService} from '../auth/authenticate.service';
import { HeaderService} from './headerService.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent/*  implements OnInit  */{

  constructor(/*public authService: AuthenticateService, public headerService: HeaderService*/) {
/*     this.isAuthenticated();
    this.headerService.getCurrentPage().subscribe(
      pageTitle => this.currentPage = pageTitle
    );
   }
  currentPage: string;
  isAuthenticate: boolean;
  isAuth = false;
  ngOnInit() {
  }

  isAuthenticated() {
    this.authService.isAuthenticated().subscribe(
      status => this.isAuth = status
    );
    return this.isAuthenticate;*/
  } 
}
