import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {ChatService as cs} from 'angular-chat-widget-rasa/lib/chatbot-rasa.service';

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
  
  export class ChatBotService {
    constructor(public httpClient: HttpClient) { }
  }