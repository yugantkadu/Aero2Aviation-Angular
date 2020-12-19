import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../razorpay.service';

@Component({
  selector: 'app-vehicle-receipt',
  templateUrl: './vehicle-receipt.component.html',
  styleUrls: ['./vehicle-receipt.component.css']
})
export class VehicleReceiptComponent implements OnInit {
  paymentData: any = [];
  formattedTime: any;
  constructor(private razorpayService: RazorpayService) { }

  ngOnInit(): void {
    this.callWebApi();
  }

  callWebApi(){
    console.log(sessionStorage.getItem('orderid'));
    this.razorpayService.invokeOrderByIdApi(sessionStorage.getItem('orderid')).subscribe((data: any) => {
      console.log(data);
      this.razorpayService.invokePaymentByIdApi(data[0].Attributes.id).subscribe((paymentData: any) =>{
        this.paymentData = paymentData;
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
      this.formattedTime =year+'-'+month+'-'+day+' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(this.formattedTime);
  }

}
