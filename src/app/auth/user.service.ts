import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user-data.model';
const url = 'http://localhost:7071';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }
  callRegisterUserDetails(user: User ): Observable<any>
  {
    console.log('Service Layer');
    return this.http.post<any>(url + '/user/registration', user);

  }

  invokeVerifyUser(email: string, password: string): Observable<any>
  {
    const userData: UserData = { email, password};
    return this.http.post<any>(url + '/user/verifyCustomer', userData);
  }

  invokeAllUsers(): Observable<User>{
    return this.http.get<User>(url + '/admin/allUsers');
  }

}
