import { Component, OnInit } from '@angular/core';
import {Products} from '../vehicle-add/products';
import {VehicleAddService} from '../vehicle-add/vehicle-add.service';
import {VehicleAddResult} from '../vehicle-add/vehicle-add-result';
import {User} from 'src/app/auth/user';
import {Brands} from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands';
import {UserService} from 'src/app/auth/user.service';
import {VehicleBrandDetailsService} from 'src/app/homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.service'
@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit
{
  products : Products;
  userType: User;
  brandType: any;
  changeBrand: Brands;
  vehicleAddResult: VehicleAddResult;
  msg: string;


  constructor(private VehicleAddService :VehicleAddService,private userService:UserService,private brandService: VehicleBrandDetailsService ) { 
    this.products = new Products();
  }

  ngOnInit(): void 
  {
  }

  onAddProduct(form)
  {

    console.log(form);
    this.products.brandid = form.brandid;
    this.products.productname = form.productname;
    this.products.productdescription = form.productdescription;
    this.products.productimage = form.productimage;
    this.products.quantityinstock = form.quantityinstock
    this.products.buyprice = form.buyprice;
    console.log(this.products);

    this.VehicleAddService.invokeAddProduct(this.products).subscribe( (data)=>
    {
        this.vehicleAddResult = data ;
        console.log(this.vehicleAddResult);
    },
    (err)=>{
        console.log(err);
        this.msg = "Operation Failed";      
    });

  }



}
