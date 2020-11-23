import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandDetailsService {

  constructor(private http : HttpClient) { }
  
  invokeBrandDetails():Observable<any>{
    const url = 'http://localhost:7071/vehicle/getAllBrands';
    return this.http.get<any>(url);
  }
}
