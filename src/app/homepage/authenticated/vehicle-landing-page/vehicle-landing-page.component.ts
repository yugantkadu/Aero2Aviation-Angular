import { Component, OnInit } from '@angular/core';
import { AuthenticatedService } from '../authenticated.service';

@Component({
  selector: 'app-vehicle-landing-page',
  templateUrl: './vehicle-landing-page.component.html',
  styleUrls: ['./vehicle-landing-page.component.css']
})
export class VehicleLandingPageComponent implements OnInit {
  products: any;
  constructor(private authenticatedService: AuthenticatedService) { }

  ngOnInit(): void {
    this.authenticatedService.invokeProductsDetails().subscribe(data=>{
      console.log(data);
      this.products = data;
    });
    console.log("I am in heelo");
    console.log(sessionStorage.getItem('userType'));
  }
}
