import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {

  responseMessage;

  constructor(private http: HttpClient) { }

  private url: string = "http://stevenprine.com/v1/api/chat/";


  postData(postData: { name, email, subject, message }) {
    console.log(name);
    this.http.post(
      this.url,
      postData,
      { responseType: 'text' }
    ).subscribe(responseData => {
      this.responseMessage = responseData;
    })
  }

}
