import { Component, OnInit } from '@angular/core';
import { Category } from '../vehicle-category-details/category';
import { VehicleCategoryDetailsService  } from '../vehicle-category-details/vehicle-category-details.service';

@Component({
  selector: 'app-vehicle-landing-page',
  templateUrl: './vehicle-landing-page.component.html',
  styleUrls: ['./vehicle-landing-page.component.css']
})
export class VehicleLandingPageComponent implements OnInit {
  categoryDetails: Category;
  constructor(private vehicleCategoryDetailsService: VehicleCategoryDetailsService) { }

  ngOnInit(): void {
    this.vehicleCategoryDetailsService.invokeCategoryDetails().subscribe((data: any) => {
      this.categoryDetails = data;
    });


  }

}
