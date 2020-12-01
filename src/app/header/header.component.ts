import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usertype: string;
  constructor() { }

  ngOnInit(): void {
    this.isUserLoggedIn();
    this.getUserDetails();
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');
    //console.log(user);
    //console.log(!(user === null));
    return (user === null);
  }

  getUserDetails() {
    this.usertype = sessionStorage.getItem('usertype');
  }

  logOut(){
    sessionStorage.removeItem('username');
  }

}
