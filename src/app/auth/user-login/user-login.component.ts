import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserResult } from '../user-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;
  userResult: UserResult;
  message: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    //console.log(form);
    this.userService.invokeVerifyUser(form.value.email, form.value.password).subscribe((data: any) => {
      console.log(data);
      this.userResult = data;
      this.message = this.userResult.status === true ? 'Login Successful' : 'Login Failed';
      this.userService.setAuthData(this.userResult.user.userid, this.userResult.user.firstname, this.userResult.user.usertype);

      if (this.userResult.user !== null && this.userResult.user.usertype === 'admin') {
        this.router.navigate(['/admin', "user"]);
      }else{
        this.router.navigate(['/user-landing-page']);
      }
    },
    (err)=>{
      console.log("Error" + err);
    });
  }

}

