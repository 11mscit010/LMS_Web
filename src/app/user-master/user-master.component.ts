import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
 
  ActiveElement: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.ActiveElement = 1;
  }
  
  ChangeNavigation(navId: any) {
    this.ActiveElement = navId;
  }

  Logout() {
    localStorage.removeItem('apitoken');
    window.location.reload();
  }

}
