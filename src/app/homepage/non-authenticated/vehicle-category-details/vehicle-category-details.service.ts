
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleCategoryDetailsService {

  constructor(private http: HttpClient) { }

  invokeCategoryDetails(): Observable<any>{
    const url = 'http://localhost:7071/vehicle/getCategoryDetails';
    return this.http.get<any>(url);
  }  
}