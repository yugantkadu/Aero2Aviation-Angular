import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/user';
import { OrderDetails } from './vehicle-order/order-details';

const url = "http://localhost:7071";
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {

  constructor(private http: HttpClient) { }

  invokeProductsDetails(): Observable<any>{
    return this.http.get<any>(url + '/vehicle/getAllProducts');
  }

  invokeUserById(userId: string): Observable<User>{
    return this.http.get<User>(url + '/user/userById/' + userId);
  }

  saveOrderDetails(order: OrderDetails): Observable<any>{
    return this.http.post<any>(url + '/buy/generateOrder',order);
  }

  invokeWebApi(): Observable<any>{//FindPayment
    return this.http.get<any>("https://localhost:44317/api/RazorpayApi/FindOrderByRecieptId/512");
  }

  invokePaymentApi(orderId: string): Observable<any>{//FindPayment
    return this.http.get<any>("https://localhost:44317/api/RazorpayApi/FindPaymentByOrderId/"+ orderId);
  }

  // invokeredirectDotnet(name: string){
  //   this.http.get<any>('https://localhost:44317/Razorpay/Index' + name);
  // }
}
