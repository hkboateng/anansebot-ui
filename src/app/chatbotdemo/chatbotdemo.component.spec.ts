import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotdemoComponent } from './chatbotdemo.component';

describe('ChatbotdemoComponent', () => {
  let component: ChatbotdemoComponent;
  let fixture: ComponentFixture<ChatbotdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
