import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user';
import { AuthenticatedService } from '../authenticated.service';

@Component({
  selector: 'app-vehicle-landing-page',
  templateUrl: './vehicle-landing-page.component.html',
  styleUrls: ['./vehicle-landing-page.component.css']
})
export class VehicleLandingPageComponent implements OnInit {
  products: any;
  userDetails: User;
  quantityinstock: number;
  quantityinstockSelected: number;
  constructor(private authenticatedService: AuthenticatedService) { }

  ngOnInit(): void {

    this.authenticatedService.invokeUserById(sessionStorage.getItem('userId')).subscribe(userdata=>{
        console.log(userdata);
        this.userDetails = userdata;

        this.authenticatedService.invokeProductsDetails().subscribe(data=>{
          console.log(data);
          this.products = data.filter((item) => ((item?.brandid.brandid === this.userDetails?.brandid.brandid) && (item?.brandid.categoryid === this.userDetails?.brandid.categoryid)));
          console.log(this.products);
        });
    });

    //this.filterProductDetails();
    //console.log("I am in heelo");
    console.log(sessionStorage.getItem('userType'));
  }

  validateStock(){
    if(this.quantityinstockSelected > this.products[0].quantityinstock){
      alert("Please Enter Stock less than Available Stock");
      this.quantityinstockSelected = 0;
    }
  console.log(this.quantityinstockSelected);
  }

  // filterProductDetails(){
  //     this.products = this.products.filter((item) => item.brandid.brandid === this.userDetails.brandid.brandid);
  //   }
}
