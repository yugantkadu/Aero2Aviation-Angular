import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = "http://localhost:7071";
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {

  constructor(private http: HttpClient) { }

  invokeProductsDetails(): Observable<any>{
    return this.http.get<any>(url + '/vehicle/getAllProducts');
  }
}
