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

      if (this.userResult.user !== null && this.userResult.user.usertype === 'admin') {
        sessionStorage.setItem('username', this.userResult.user.email);
        sessionStorage.setItem('usertype', this.userResult.user.usertype);
        this.router.navigate(['/admin']);
      }

      if ( this.userResult.status === true){
        sessionStorage.setItem('username', this.userResult.user.email);
        sessionStorage.setItem('usertype', this.userResult.user.usertype);
      }
      this.message = this.userResult.status === true ? 'Login Successful' : 'Login Failed';
    });
  }

}
