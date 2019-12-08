import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {LoginRequest, LoginResponse} from '../login/loginUser';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import {environment} from '../../environments/environment';

const BASE_URL = environment.loginAPI_URL;
const LOGIN_URL = BASE_URL + '/security/login';
const TOKEN_VALIDATE_URL = BASE_URL + '/security/verifyToken';
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

export class AuthenticateService {
  private loginResponse: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>(null);
  private authToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private isAuthenticate:  BehaviorSubject<boolean> = new  BehaviorSubject<boolean>(null);
  testAuthenticate:  Subject<boolean> = new  Subject<boolean>();
  constructor(public httpClient: HttpClient) { }
  authenticated: boolean;

  private getAuthenticationStatus(): Observable<LoginResponse> {
    const token = localStorage.getItem('platform-token');
    const params = {
      params: new HttpParams().set('authToken', token)
    };
    return this.httpClient.get<LoginResponse>(TOKEN_VALIDATE_URL, params);
  }
  public isAuthenticated(): Observable<boolean>{
    this.getAuthenticationStatus().subscribe(
      auth => {
        this.isAuthenticate.next(auth.status),
        this.authenticated = auth.status,
        this.testAuthenticate.next(this.authenticated);
      }
    );
    return this.isAuthenticate;
  }

  getAuthentication() {
    return this.authenticated;
  }

  private auth(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(LOGIN_URL, loginRequest, httpOptions);
  }

  public authenticate(request: LoginRequest): Observable<LoginResponse> {
    const loginRes = new LoginResponse();
    loginRes.setstatus(false)
    this.auth(request).subscribe(
      response => {
        if(response.status){
          localStorage.setItem('platform-token', response.token);
        }
        loginRes.responseMessage = response.responseMessage;
        loginRes.responseStatus = response.responseStatus;
        loginRes.status = response.status;
        loginRes.token = response.token;
        loginRes.hasError =  response.status ? false : true;
        this.authenticated = response.status;
        this.isAuthenticate.next(response.status);
        this.authToken.next(response.status ? response.token : null);
        this.loginResponse.next(loginRes);
      }
    );
    if(!loginRes.status){
      loginRes.hasError = true
      loginRes.responseMessage = "Error occured processing Login. Try again later";
    }
    return of(loginRes);
  }
}
