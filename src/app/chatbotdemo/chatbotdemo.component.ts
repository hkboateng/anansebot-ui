import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chatbotdemo',
  templateUrl: './chatbotdemo.component.html',
  styleUrls: ['./chatbotdemo.component.css']
})
export class ChatbotdemoComponent implements OnInit {
  public showChatBox:boolean = false;
  public showIcon:boolean = true;
  public buttonName:any = 'Show';

  constructor(){

  }
  message = {
    test: 'test'
  }
  ngOnInit() {
  }

  toggleChatbotIcon(){
    this.showChatBox = !this.showChatBox;
    this.showIcon = !this.showIcon;
  }
  restartConversation(){

  }

}
