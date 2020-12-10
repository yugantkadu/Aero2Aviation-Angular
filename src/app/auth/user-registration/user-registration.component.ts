import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import { VehicleBrandDetailsService } from 'src/app/homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.service';
import { Category } from 'src/app/homepage/non-authenticated/vehicle-category-details/category';
import { VehicleCategoryDetailsService } from 'src/app/homepage/non-authenticated/vehicle-category-details/vehicle-category-details.service';

import {User} from '../user';
import {UserService} from '../user.service';
import {UserResult} from '../user-result';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userDetails: User;
  userResult: UserResult;
  msg: string;
  usertype: string[] = ['retailer', 'manufacturer'];
  categoryType: Category;
  brandType: any;
  changeBrand: Brands;
  categoryFetch: number;
  brandFetch: number;

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
    console.log(this.categoryFetch);
    const alterData = {
      firstname : this.userDetails.firstname,
      lastname: this.userDetails.lastname,
      email: this.userDetails.email,
      password: this.userDetails.password,
      mobileno : this.userDetails.mobileno,
      address: this.userDetails.address,
      pincode: this.userDetails.pincode,
      categoryid: {categoryid : this.categoryFetch},
      brandid: {brandid: this.brandFetch},
      usertype : this.userDetails.usertype};
    this.userRegistrationService.callRegisterUserDetails(alterData).subscribe(
      (data)=>{

        //console.log(data);

        this.userResult = data ;
        console.log(this.userResult);
        this.userDetails = null;
        alert(this.userResult.message);
        /*this.userDetails.firstname= " ";
        this.userDetails.lastname = "";
        this.userDetails.email = "";
        this.userDetails.password = "";
        this.userDetails.address = "";
        this.userDetails.pincode = null;
        this.userDetails.categoryid = null ;
        this.userDetails.brandid = null;
        this.userDetails.usertype = "";
        this.userDetails.mobileno= null;*/

     },
      (err)=>{

        console.log(err);
        this.msg = "Operation Failed";
      });
  }
}
