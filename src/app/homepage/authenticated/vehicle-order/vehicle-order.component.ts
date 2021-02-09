import { Component, OnInit } from '@angular/core';
import {OrderdetailsResult}from './orderdetailsResult';
import {VehicleOrderService} from './vehicle-order.service';

@Component({
  selector: 'app-vehicle-order',
  templateUrl: './vehicle-order.component.html',
  styleUrls: ['./vehicle-order.component.css']
})
export class VehicleOrderComponent implements OnInit {
  orderdetails: OrderdetailsResult ;

  constructor(private vehicleOrderService: VehicleOrderService) { }

  ngOnInit(): void {
    this.vehicleOrderService.invokeOrderDetails().subscribe ((data: any) => {
      this.orderdetails = data;
      console.log(this.orderdetails);
  },
  (err)=>{
    console.log("Error" + err);
  });

}
}
