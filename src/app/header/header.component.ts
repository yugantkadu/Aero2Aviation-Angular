import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usertype: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isUserLoggedIn();
    this.getUserDetails();
    this.userService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isUserLoggedIn();
        this.getUserDetails();
      }
    );
    console.log(sessionStorage.getItem('userType'));
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('userType');
    //console.log(user);
    //console.log(!(user === null));
    return (user === null);
  }

  getUserDetails() {
    this.usertype = sessionStorage.getItem('userType');
  }

  logOut(){
    this.userService.logout();
    this.usertype = null;
    console.log(this.usertype);
  }

}
