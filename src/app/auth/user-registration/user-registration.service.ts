import { Injectable } from '@angular/core';
import {User} from '../user-registration/user';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http : HttpClient) { }

  callRegisterUserDetails(user : User ):Observable<any>
  {
    console.log("Service Layer");
    let url="http://localhost:7071/user/registration";
    return this.http.post<any>(url,user);

  }
}
