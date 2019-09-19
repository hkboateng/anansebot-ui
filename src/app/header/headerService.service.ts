import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  private currentPage: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  setCurrentPage(currentPage: string){
    this.currentPage.next(currentPage);
  }
  getCurrentPage(): Observable<string> {
    return this.currentPage;
  }
}
