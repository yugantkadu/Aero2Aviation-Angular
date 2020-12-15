
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class VehicleCategoryDetailsService {

  constructor(private http: HttpClient) { }

  invokeCategoryDetails(): Observable<Category>{
    const url = 'http://localhost:7071/vehicle/getCategoryDetails';
    return this.http.get<Category>(url);
  }
}
