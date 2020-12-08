import { Injectable } from '@angular/core';
import {Products} from '../vehicle-add/products'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'http://localhost:7071';


@Injectable({
  providedIn: 'root'
})

export class VehicleAddService 
{

  constructor(private http: HttpClient) { }

  invokeAddProduct(products : Products): Observable<any>
  {
    console.log("Service Layer Calling");
    return this.http.post<any>(url + '/vehicle/addProduct', products);
  }
}
