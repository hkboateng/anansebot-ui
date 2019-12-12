import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFieldMessagesComponent } from './display-field-messages.component';

describe('DisplayFieldMessagesComponent', () => {
  let component: DisplayFieldMessagesComponent;
  let fixture: ComponentFixture<DisplayFieldMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFieldMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFieldMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
