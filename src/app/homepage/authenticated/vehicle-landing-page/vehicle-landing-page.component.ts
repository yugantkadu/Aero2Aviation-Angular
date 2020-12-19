import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user';
import { AuthenticatedService } from '../authenticated.service';
import { Router } from '@angular/router';
import { Products } from '../vehicle-add/products';

@Component({
  selector: 'app-vehicle-landing-page',
  templateUrl: './vehicle-landing-page.component.html',
  styleUrls: ['./vehicle-landing-page.component.css']
})
export class VehicleLandingPageComponent implements OnInit {
  products: any;
  userDetails: User;
  //quantityinstock: number;
  quantityinstockSelected: number = 1;
  manufacturerName: string;
  brandImg:  string;
  retailerName: string;
  email: string;
  contact: number;

  orderObj: any;
  constructor(private authenticatedService: AuthenticatedService, private router: Router) { }

  ngOnInit(): void {

    this.authenticatedService.invokeUserById(sessionStorage.getItem('userId')).subscribe(userdata=>{
        console.log(userdata);
        this.userDetails = userdata;

        this.authenticatedService.invokeProductsDetails().subscribe(data=>{
          console.log(data);
          this.products = data.filter((item) => ((item?.brandid.brandid === this.userDetails?.brandid.brandid) && (item?.brandid.categoryid.categoryid === this.userDetails?.brandid.categoryid.categoryid)));
          console.log(this.products);
          console.log(this.products.productname);
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

  redirectDotnet(productData: Products){
    //this.orderObj = {orderid: 123, orderamount: this.products.buyprice, manufacturerName: this.products.manufacturerid.firstname ,brandImg:  this.products.brandid.image, retailerName: this.userDetails.firstname, email: this.userDetails.email, contact: this.userDetails.mobileno};
    //this.router.navigate(['https://localhost:44317/Razorpay/Index']);
    //'https://localhost:44317/Razorpay/Index?orderamount='+ this.products.buyprice+'?manufacturerName='+this.products.manufacturerid?.firstname+'?brandImg='+this.products.brandid?.image+'?retailerName='+ this.userDetails.firstname+'?email='+this.userDetails.email+'?contact='+this.userDetails.mobileno;
    //window.location.href = 'https://localhost:44317/Razorpay/Index?orderamount='+ this.products.buyprice+'?manufacturerName='+this.products.manufacturerid?.firstname+'?brandImg='+this.products.brandid?.image+'?retailerName='+ this.userDetails.firstname+'?email='+this.userDetails.email+'?contact='+this.userDetails.mobileno;

    alert("Order is generated");
    this.orderObj = {retailerid: {userid: this.userDetails.userid}, productid: {productid: productData.productid}, quantityordered: this.quantityinstockSelected, price: productData.buyprice};
    console.log(this.orderObj);
    this.authenticatedService.saveOrderDetails(this.orderObj).subscribe((data:any)=>{
      console.log(data);
      window.location.href = 'https://localhost:44317/Razorpay/Index?orderId='+data.orderid+'&orderAmount='+this.products[0].buyprice+'&manufacturerName='+this.products[0].manufacturerid.firstname+' '+this.products[0].manufacturerid.lastname+'&brandImg='+this.products[0].brandid?.image+'&retailerName='+ this.userDetails.firstname+' '+this.userDetails.lastname+'&email='+this.userDetails.email+'&contact='+this.userDetails.mobileno;
    });
    //window.location.href = 'https://localhost:44317/Razorpay/Index?orderAmount='+this.products[0].buyprice+'&manufacturerName='+this.products[0].manufacturerid.firstname+' '+this.products[0].manufacturerid.lastname+'&brandImg='+this.products[0].brandid?.image+'&retailerName='+ this.userDetails.firstname+' '+this.userDetails.lastname+'&email='+this.userDetails.email+'&contact='+this.userDetails.mobileno;
    //this.authenticatedService.invokeredirectDotnet("yugant");
    console.log("Hello");
  }

  callWebApi(){
    this.authenticatedService.invokeWebApi().subscribe((data: any) => {
      console.log(data);
      this.authenticatedService.invokePaymentApi(data[0].Attributes.id).subscribe((paymentData: any) =>{
        console.log(paymentData);
      });
      this.convertUnixDate(data);
    });
  }

  convertUnixDate(data: any){
    let unix_timestamp = data[0].Attributes.created_at
      var date = new Date(unix_timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var formattedTime =year+'-'+month+'-'+day+' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(formattedTime);
  }

  // filterProductDetails(){
  //     this.products = this.products.filter((item) => item.brandid.brandid === this.userDetails.brandid.brandid);
  //   }
}
