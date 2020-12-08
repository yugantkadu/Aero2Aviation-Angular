import { Component, OnInit } from '@angular/core';
import{UserProfileService} from './user-profile.service';
import {UserProfileResult} from './user-profile-result';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileResult : UserProfileResult

  constructor(private userProfileService:UserProfileService) { }

  ngOnInit(): void {
  }

  invokeUserProfile()
  {
    this.userProfileService.CallUserProfile().subscribe ((data: any) => {
     console.log(data);
     this.userProfileResult = data;
     console.log(this.userProfileResult);
  });

  }
}
