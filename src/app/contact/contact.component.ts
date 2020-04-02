import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

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
       console.log(response.status);
       console.log(this.data);
    });


  }

}
