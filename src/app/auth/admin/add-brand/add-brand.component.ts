import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/homepage/non-authenticated/vehicle-category-details/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
    brand: Brands;
  constructor(private adminService:AdminService , private router: Router) {
    this.brand=new Brands();
  }

  ngOnInit(): void {
  }
  addBrand(form){
    this.brand.categoryid = {categoryid: form.categoryid};
    this.brand.name= form.brandName;
    this.brand.branddescription = form.brandDescription;
    this.brand.image = form.brandImage;
    console.log(form);
    this.adminService.invokeAddBrand(this.brand).subscribe((data)=>{
     console.log(data);
     alert(data.message);
     this.router.navigate(['/admin', "brand"]);
  },
  (err)=>{
    console.log("Error" + err);
  });
 }

}
