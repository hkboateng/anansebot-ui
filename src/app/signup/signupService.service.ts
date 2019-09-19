import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {NewUser, SignupRequest, SignupResponse} from './signup';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
const BASE_URL = environment.loginAPI_URL;
const REGISTER_URL = BASE_URL + '/hbguard/security/register';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
  })
};
@Injectable({
  providedIn: 'root'
})

export class SignupService {
  response: SignupResponse = null;
  constructor(public httpClient: HttpClient) {
  }

  register(register: SignupRequest): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(REGISTER_URL, register, httpOptions);

  }

  handleError(error: any) {
    console.log(error);
  }
}
