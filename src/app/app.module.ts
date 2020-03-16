import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import {AuthGuardService as AuthGuard} from '../app/auth/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayFieldMessagesComponent } from './display-field-messages/display-field-messages.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotRasaModule } from 'angular-chat-widget-rasa';
import { ChatbotdemoComponent } from './chatbotdemo/chatbotdemo.component';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
    HeaderComponent,
    IndexComponent,
    ContactComponent,
    DisplayFieldMessagesComponent,
    ChatbotComponent,
    ChatbotdemoComponent,
    
  ],
  imports: [
    ChatbotRasaModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
