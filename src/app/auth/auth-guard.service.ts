import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router, CanActivate } from '@angular/router';
import {AuthenticateService} from './authenticate.service';
import { Observable, of, Subject,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(public authService: AuthenticateService, public router: Router) { }
  isAuth: boolean;
   active = new BehaviorSubject<boolean>(null);
   isUpdated = false;
  canActivate(){
    const test = this.authService.isAuthenticated().subscribe(
      (status) => {
        this.isUpdated = true,
        this.active.next(status);
      },
      (error) => {
        
      },
      () => {
        //console.log('complete');
      }
    );
    test.add(() => console.log(this.active.value));
    return this.active.value;
  }

  callBack(auth: boolean){

    if(this.isUpdated){
      console.log(this.isUpdated);
      console.log(auth);
      if (auth) {
        console.log(auth);
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }

  }
}
