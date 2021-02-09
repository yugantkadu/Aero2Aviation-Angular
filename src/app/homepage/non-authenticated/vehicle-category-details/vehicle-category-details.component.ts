import { Component, OnInit } from '@angular/core';
import {VehicleCategoryDetailsService} from './vehicle-category-details.service';
import { Category } from './category';
@Component({
  selector: 'app-vehicle-category-details',
  templateUrl: './vehicle-category-details.component.html',
  styleUrls: ['./vehicle-category-details.component.css']
})
export class VehicleCategoryDetailsComponent implements OnInit {

  constructor(private vehicleCategoryDetailsService: VehicleCategoryDetailsService) { }
  category: Category;

  ngOnInit(): void {
    this.vehicleCategoryDetailsService.invokeCategoryDetails().subscribe((data: any) => {
      this.category = data;
      console.log(this.category);
    },
    (err)=>{
      console.log("Error" + err);
    });
  }
}
