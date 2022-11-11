import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS_WEB';
  IsLogin = localStorage.getItem('apitoken') != null ? true : false;

  constructor(){
    console.log('app component load');
  }
}
