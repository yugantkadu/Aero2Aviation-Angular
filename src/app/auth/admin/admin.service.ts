import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import {Products} from 'src/app/homepage/authenticated/vehicle-add/products'
import {Category} from 'src/app/homepage/non-authenticated/vehicle-category-details/category'
import {Brands} from 'src/app/homepage/non-authenticated/vehicle-brand-details/brands'


const url = 'http://localhost:7071';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  invokeModifyUser(user: User): Observable<any>{
    console.log(user);
    return this.http.put<any>(url + '/admin/modifyUser/' + user.userid, user);
  }

  invokeModifyProduct(product: Products): Observable<any>{
    console.log(product);
    const url = 'http://localhost:7071/admin/modifyProduct/';
    return this.http.put<any>( url + product.productid, product);
  }

  invokeModifyCategory(category: Category): Observable<any>{
    console.log(category);
    const url = 'http://localhost:7071/admin/modifyCategory/';
    return this.http.put<any>( url + category.categoryid, category);
  }

  invokeModifyBrand(brand: Brands): Observable<any>{
    console.log(brand);
    const url = 'http://localhost:7071/admin/modifyBrand/';
    return this.http.put<any>( url + brand.brandid, brand);
  }

  invokeModifyOrder(order: any): Observable<any>{
    console.log(order);
    const url = 'http://localhost:7071/admin/modifyBrand/';
    return this.http.put<any>( url + order.orderid, order);
  }

  invokeAddBrand(brand:Brands):Observable<any>{
    console.log(brand);
    const url = 'http://localhost:7071/admin/addBrand/';
    return this.http.post<any>( url , brand);
  }
}
