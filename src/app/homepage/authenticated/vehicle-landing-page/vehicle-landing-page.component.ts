import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user';
import { AuthenticatedService } from '../authenticated.service';
import { RazorpayService } from '../razorpay.service';
import { Products } from '../vehicle-add/products';

@Component({
  selector: 'app-vehicle-landing-page',
  templateUrl: './vehicle-landing-page.component.html',
  styleUrls: ['./vehicle-landing-page.component.css']
})
export class VehicleLandingPageComponent implements OnInit {
  products: any;
  userDetails: User;
  quantityinstockSelected: number = 1;
  manufacturerName: string;
  brandImg:  string;
  retailerName: string;
  email: string;
  contact: number;

  orderStatus: string = '';
  orderObj: any;

  constructor(private authenticatedService: AuthenticatedService, private razorpayService: RazorpayService) { }

  ngOnInit(): void {

    this.authenticatedService.invokeUserById(sessionStorage.getItem('userId')).subscribe(userdata=>{
        console.log(userdata);
        this.userDetails = userdata;

        this.authenticatedService.invokeProductsDetails().subscribe(data=>{
          console.log(data);
          this.products = data.filter((item) => ((item?.brandid.brandid === this.userDetails?.brandid.brandid) && (item?.brandid.categoryid.categoryid === this.userDetails?.brandid.categoryid.categoryid)));
          console.log(this.products);
          //console.log(this.products.productname);
        });
    });


    console.log(sessionStorage.getItem('userType'));
  }

  validateStock(product: Products){
    if(this.quantityinstockSelected > product.quantityinstock){
      alert("Please Enter Stock less than Available Stock");
      this.quantityinstockSelected = 1;
    }
  console.log(this.quantityinstockSelected);
  }

  redirectDotnet(productData: Products){
    //this.orderObj = {orderid: 123, orderamount: this.products.buyprice, manufacturerName: this.products.manufacturerid.firstname ,brandImg:  this.products.brandid.image, retailerName: this.userDetails.firstname, email: this.userDetails.email, contact: this.userDetails.mobileno};
    //this.router.navigate(['https://localhost:44317/Razorpay/Index']);
    //'https://localhost:44317/Razorpay/Index?orderamount='+ this.products.buyprice+'?manufacturerName='+this.products.manufacturerid?.firstname+'?brandImg='+this.products.brandid?.image+'?retailerName='+ this.userDetails.firstname+'?email='+this.userDetails.email+'?contact='+this.userDetails.mobileno;
    //window.location.href = 'https://localhost:44317/Razorpay/Index?orderamount='+ this.products.buyprice+'?manufacturerName='+this.products.manufacturerid?.firstname+'?brandImg='+this.products.brandid?.image+'?retailerName='+ this.userDetails.firstname+'?email='+this.userDetails.email+'?contact='+this.userDetails.mobileno;

    this.orderStatus = 'Do you want to buy Product with Productid ' + productData.productid;
    const del = confirm(this.orderStatus);

    if (del === true) {
      alert("Order is generated for Productid "+ productData.productid);
      this.orderObj = {retailerid: {userid: this.userDetails.userid}, productid: {productid: productData.productid}, quantityordered: this.quantityinstockSelected, price: productData.buyprice};
      console.log(this.orderObj);
      this.authenticatedService.saveOrderDetails(this.orderObj).subscribe((data:any)=>{
        console.log(data);
        sessionStorage.setItem('orderid',data.orderid);
        window.location.href = 'https://localhost:44317/Razorpay/Index?orderId='+data.orderid+'&orderAmount='+productData.buyprice+'&manufacturerName='+productData.manufacturerid.firstname+' '+productData.manufacturerid.lastname+'&brandImg='+productData.brandid?.image+'&retailerName='+ this.userDetails.firstname+' '+this.userDetails.lastname+'&email='+this.userDetails.email+'&contact='+this.userDetails.mobileno;
      });
    } else{
      this.quantityinstockSelected = 1;
    }
    //window.location.href = 'https://localhost:44317/Razorpay/Index?orderAmount='+this.products[0].buyprice+'&manufacturerName='+this.products[0].manufacturerid.firstname+' '+this.products[0].manufacturerid.lastname+'&brandImg='+this.products[0].brandid?.image+'&retailerName='+ this.userDetails.firstname+' '+this.userDetails.lastname+'&email='+this.userDetails.email+'&contact='+this.userDetails.mobileno;
    //this.authenticatedService.invokeredirectDotnet("yugant");
    //console.log("Hello");
  }

  // callWebApi(){
  //   this.razorpayService.invokeOrderByIdApi().subscribe((data: any) => {
  //     console.log(data);
  //     this.razorpayService.invokePaymentByIdApi(data[0].Attributes.id).subscribe((paymentData: any) =>{
  //       console.log(paymentData);
  //     });
  //     this.convertUnixDate(data);
  //   });
  // }

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
