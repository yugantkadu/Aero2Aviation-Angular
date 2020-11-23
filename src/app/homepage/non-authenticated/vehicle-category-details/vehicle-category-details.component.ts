import { Component, OnInit } from '@angular/core';
import {VehicleCategoryDetailsService} from './vehicle-category-details.service';
import { Category } from './category'; 
@Component({
  selector: 'app-vehicle-category-details',
  templateUrl: './vehicle-category-details.component.html',
  styleUrls: ['./vehicle-category-details.component.css']
})
export class VehicleCategoryDetailsComponent implements OnInit {

  constructor(private VehicleCategoryDetailsService:VehicleCategoryDetailsService) { }
  category:Category
  ngOnInit(): void {
  }
  callCategoryDetails(){
    this.VehicleCategoryDetailsService.invokeCategoryDetails().subscribe((data:any) => {
      this.category = data;
      console.log(this.category);
    });
  }
}
