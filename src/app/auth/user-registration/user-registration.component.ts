import { Component, OnInit } from '@angular/core';
import {User} from '../user-registration/user';
import {UserRegistrationService} from '../user-registration/user-registration.service';
import {UserRegistrationResult} from '../user-registration/user-registration-result'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userDetails : User
  userResult: UserRegistrationResult;
  msg : string
  customertype: string[] = ['retailer', 'manufacturer'];


  constructor(private UserRegistrationService :UserRegistrationService) { 

    this.userDetails = new User();
   
  }

  ngOnInit(): void {
  }

  callRegister()
  {
  
    console.log(this.userDetails);

    this.UserRegistrationService.callRegisterUserDetails(this.userDetails).subscribe(
      (data)=>{

        console.log(data);        

        this.userResult = data ;
        console.log(this.userResult); 
        this.userDetails.firstname= " ";
        this.userDetails.lastname = "";
        this.userDetails.email = "";
        this.userDetails.password = "";
        this.userDetails.address = "";
        this.userDetails.pincode = null;
        this.userDetails.categoryid = null ;
        this.userDetails.brandid = null;
        this.userDetails.customertype = "";
        this.userDetails.mobileno= null;
 
     },     
      (err)=>{
 
        console.log(err); 
        this.msg = "Operation Failed";
      }); 
  }
}
