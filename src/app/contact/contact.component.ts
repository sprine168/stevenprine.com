import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

// Sub module imports
import { ChatFormComponent } from './chat-form/chat-form.component';
import { LiveChatFormComponent } from './live-chat-form/live-chat-form.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data: any = [];
  apiToken: string;

  constructor() { }

  ngOnInit(): void {

    const getData = ajax('https://www.stevenprine.com/v1/api/chat');

    getData.subscribe(response => {
       this.data = response.response;
    });

  }

}
