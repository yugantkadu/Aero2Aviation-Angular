import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Brands } from './brands';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandDetailsService {

  constructor(private http: HttpClient) { }

  invokeBrandDetails(): Observable<Brands>{
    const url = 'http://localhost:7071/vehicle/getAllBrands';
    return this.http.get<Brands>(url);
  }
}
