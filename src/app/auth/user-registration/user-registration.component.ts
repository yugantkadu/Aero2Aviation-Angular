import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import { VehicleBrandDetailsService } from 'src/app/homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.service';
import { Category } from 'src/app/homepage/non-authenticated/vehicle-category-details/category';
import { VehicleCategoryDetailsService } from 'src/app/homepage/non-authenticated/vehicle-category-details/vehicle-category-details.service';

import {User} from '../user';
import {UserService} from '../user.service';
import {UserRegistrationResult} from './user-registration-result';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userDetails: User;
  userResult: UserRegistrationResult;
  msg: string;
  customertype: string[] = ['retailer', 'manufacturer'];
  categoryType: Category;
  brandType: any;
  changeBrand: Brands;

  constructor(private userRegistrationService: UserService, private brandService: VehicleBrandDetailsService, private categoryService: VehicleCategoryDetailsService) {
    this.userDetails = new User();

  }

  ngOnInit(): void {
    this.brandService.invokeBrandDetails().subscribe((data: any) => {
      this.brandType = data;
      console.log(this.brandType);
    });
    this.categoryService.invokeCategoryDetails().subscribe((data: any) => {
      this.categoryType = data;
      console.log(this.categoryType);
    });
  }

  onSelect(categoryId: number) {
    this.changeBrand = this.brandType.filter((item) => item.categoryid === categoryId);
    console.log(this.changeBrand);
  }

  callRegister()
  {

    console.log(this.userDetails);

    this.userRegistrationService.callRegisterUserDetails(this.userDetails).subscribe(
      (data)=>{

        //console.log(data);

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
