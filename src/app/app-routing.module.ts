import { NgModule } from '@angular/core';
import { Routes, CanActivate , RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {LoginComponent} from '../app/login/login.component';
import {SignupComponent} from '../app/signup/signup.component';
import {ContactComponent} from '../app/contact/contact.component';
import {IndexComponent} from '../app/index/index.component';
import {ChatbotComponent} from '../app/chatbot/chatbot.component';
import {ChatbotdemoComponent} from '../app/chatbotdemo/chatbotdemo.component';
const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'index', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'chatdemo', component: ChatbotComponent},
  {path:'chatbot', component: ChatbotdemoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

