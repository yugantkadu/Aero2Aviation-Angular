import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './vehicle-receipt/payment';
const dotNetUrl = "https://localhost:44317/api/RazorpayApi";
const springUrl = "http://localhost:7071";
@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor(private http: HttpClient) { }

  invokeOrderByIdApi(receiptId: string): Observable<any>{
    console.log(receiptId);
    return this.http.get<any>(dotNetUrl + "/FindOrderByRecieptId/" + receiptId);
  }

  invokePaymentByIdApi(orderId: string): Observable<any>{
    return this.http.get<any>(dotNetUrl + "/FindPaymentByOrderId/"+ orderId);
  }

  commitPaymentDetails(payment: Payment): Observable<any>{
    return this.http.post<any>(springUrl + '/buy/generatePayment', payment);
  }

  invokePaymentDetails(): Observable<any>{
    return this.http.get<any>(springUrl + '/vehicle/getPaymentDetails');
  }

}
