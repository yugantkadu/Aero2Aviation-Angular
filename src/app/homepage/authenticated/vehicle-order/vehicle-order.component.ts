import { Component, OnInit } from '@angular/core'; 
import {Orderdetails}from './orderdetails';
import {VehicleOrderService} from './vehicle-order.service';

@Component({
  selector: 'app-vehicle-order',
  templateUrl: './vehicle-order.component.html',
  styleUrls: ['./vehicle-order.component.css']
})
export class VehicleOrderComponent implements OnInit {
  orderdetails: Orderdetails ;

  constructor(private vehicleOrderServive: VehicleOrderService) { }

  ngOnInit(): void {
    this.vehicleOrderServive.invokeOrderDetails().subscribe ((data: any) => {
      this.orderdetails = data;
      console.log(this.orderdetails);
  });

}
}
