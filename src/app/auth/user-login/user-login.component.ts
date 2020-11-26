import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;
  message: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    //console.log(form);
    this.userService.invokeVerifyUser(form.value.email, form.value.password).subscribe((data: any) => {
      console.log(data);
      this.user = data;
      sessionStorage.setItem('username', this.user.email);
      this.message = this.user.customerid !== 0 ? 'Login Successful' : 'Login Failed';
    });
  }

}
