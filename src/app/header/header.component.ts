import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { UserService } from '../auth/user.service';
import { AuthenticatedService } from '../homepage/authenticated/authenticated.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usertype: string;
  userDetails: User;
  constructor(private userService: UserService, private authenticatedService: AuthenticatedService) { }

  ngOnInit(): void {
    this.isUserLoggedIn();
    this.getUserDetails();
    this.userService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isUserLoggedIn();
        this.getUserDetails();
      }
    );

  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('userType');
    //console.log(user);
    //console.log(!(user === null));
    return (user === null);
  }

  getUserDetails() {
    this.usertype = sessionStorage.getItem('userType');
    if(sessionStorage.getItem('userType') !== null){
      this.authenticatedService.invokeUserById(sessionStorage.getItem('userId')).subscribe(userData=>{
        //console.log(data);
        this.userDetails = userData;
        console.log(this.userDetails);
      });
    }
  }

  logOut(){
    this.userService.logout();
    this.usertype = null;
    this.userDetails = null;
    //console.log(this.usertype);
  }

}
