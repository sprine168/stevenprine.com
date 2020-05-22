import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {
  @ViewChild('form') form: NgForm;
  name = '';
  email = '';
  subject = '';
  message = '';

  public responseMessage = "";

  constructor(private http: HttpClient) { }

  private url: string = "https://stevenprine.com/v1/api/chat/";


  postData(postData: { name, email, subject, message }) {
    console.log(name);

    this.http.post(
      this.url,
      postData,
      { responseType: 'text' }
    )
      .subscribe(responseData => {
        this.responseMessage = responseData;
      });

  }

  onSubmit() {
    this.form.reset();
  }

}
