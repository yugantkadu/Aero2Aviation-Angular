import { Component, OnInit } from '@angular/core';
import{UserProfileService} from './user-profile.service';
import {UserProfileResult} from './user-profile-result';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User;

  constructor(private userProfileService:UserProfileService) { }

  ngOnInit(): void {
    this.userProfileService.CallUserProfile(sessionStorage.getItem('userId')).subscribe ((data: any) => {
      console.log(data);
      this.user = data;
      //console.log(this.userProfileResult);
   },
   (err)=>{
     console.log("Error" + err);
   });
  }
}
