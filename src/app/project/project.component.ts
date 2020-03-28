import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data: any = [];
  apiToken: string;

  constructor() { }

  ngOnInit(): void {

    // const getData = ajax('https://api.github.com/users/sprine168/repos');
    // const getApiToken = ajax('https://github.com/login/oauth/authorize');

    // getApiToken.subscribe(response => {
    //   this.apiToken = response.response;
    //   console.log(this.apiToken);

    // });


    // getData.subscribe(response => {
    //   this.data = response.response;
    //   console.log(response.status);
    //   console.log(this.data);
    // });

  }

}
