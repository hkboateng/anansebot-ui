import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-field-messages',
  templateUrl: './display-field-messages.component.html',
  styleUrls: ['./display-field-messages.component.css']
})
export class DisplayFieldMessagesComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
