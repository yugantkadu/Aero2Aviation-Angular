import { Component, OnInit } from '@angular/core';
import {VehicleBrandDetailsService} from './vehicle-brand-details.service';
import {Brands} from './brands';

@Component({
  selector: 'app-vehicle-brand-details',
  templateUrl: './vehicle-brand-details.component.html',
  styleUrls: ['./vehicle-brand-details.component.css']
})

export class VehicleBrandDetailsComponent implements OnInit {
  brand: Brands;

  constructor(private vehicleBrandDetailsService: VehicleBrandDetailsService) { }

  ngOnInit(): void {
    this.vehicleBrandDetailsService.invokeBrandDetails().subscribe ((data: any) => {
      this.brand = data;
      console.log(this.brand);
  },
  (err)=>{
    console.log("Error" + err);
  });
  }

}
