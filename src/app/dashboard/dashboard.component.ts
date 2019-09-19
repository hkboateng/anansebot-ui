import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header/headerService.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor(private headerService: HeaderService) {
    this.headerService.setCurrentPage(this.title);
   }

  ngOnInit() {
  }

}
