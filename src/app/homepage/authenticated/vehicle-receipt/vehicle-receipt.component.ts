import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../razorpay.service';
import { Payment } from './payment';

@Component({
  selector: 'app-vehicle-receipt',
  templateUrl: './vehicle-receipt.component.html',
  styleUrls: ['./vehicle-receipt.component.css']
})
export class VehicleReceiptComponent implements OnInit {
  paymentData: any = [];
  paymentResult: Payment;
  formattedTime: any;
  constructor(private razorpayService: RazorpayService) { }

  ngOnInit(): void {
    this.callWebApi();
  }

  callWebApi(){
    console.log(sessionStorage.getItem('orderid'));
    this.razorpayService.invokeOrderByIdApi(sessionStorage.getItem('orderid')).subscribe((data: any) => {
      console.log(data);
      this.convertUnixDate(data);
      this.razorpayService.invokePaymentByIdApi(data[0].Attributes.id).subscribe((paymentData: any) =>{
        this.paymentData = paymentData;
        console.log(paymentData);
        this.paymentResult = {
          orderid: {orderid: parseInt(sessionStorage.getItem('orderid'))},
          razorpaypaymentid: paymentData[0].Attributes.id,
          razorpayorderid: paymentData[0].Attributes.order_id,
          amount: paymentData[0].Attributes.amount,
          paymentmode: paymentData[0].Attributes.method,
          paymentdate: this.formattedTime};
        this.savePaymentDetails(this.paymentResult);
      });
    });
  }

  savePaymentDetails(payment: Payment){
    this.razorpayService.commitPaymentDetails(payment).subscribe((data:any) => {
      console.log(data);
    });
  }

  convertUnixDate(data: any){
    let unix_timestamp = data[0].Attributes.created_at
      var date = new Date(unix_timestamp * 1000);
      var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var day = date.getDate();
      var month = months[date.getMonth()];
      var year = date.getFullYear();
      this.formattedTime =year+'-'+month+'-'+day+' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(this.formattedTime);
  }

}
