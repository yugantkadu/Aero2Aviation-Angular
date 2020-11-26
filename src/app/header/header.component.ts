import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');
    console.log(user);
    console.log(!(user === null));
    return (user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
  }

}
