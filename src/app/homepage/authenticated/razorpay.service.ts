import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = "https://localhost:44317/api/RazorpayApi";

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor(private http: HttpClient) { }

  invokeOrderByIdApi(receiptId: string): Observable<any>{
    console.log(receiptId);
    return this.http.get<any>(url + "/FindOrderByRecieptId/" + receiptId);
  }

  invokePaymentByIdApi(orderId: string): Observable<any>{
    return this.http.get<any>(url + "/FindPaymentByOrderId/"+ orderId);
  }

}
