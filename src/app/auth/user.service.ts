import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserData } from './user-data.model';
import { Router } from '@angular/router';
import { UserResult } from './user-result';
const url = 'http://localhost:7071';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private authStatusListener = new Subject <boolean>();
  constructor(private http: HttpClient, private router: Router) { }
 
  callRegisterUserDetails(user: User ): Observable<UserResult>
  {
    console.log('Service Layer');
    console.log(user);
    return this.http.post<UserResult>(url + '/user/registration', user);

  }

  invokeVerifyUser(email: string, password: string): Observable<any>
  {
    const userData: UserData = { email, password};
    return this.http.post<any>(url + '/user/verifyCustomer', userData);
  }

  invokeAllUsers(): Observable<User>{
    return this.http.get<User>(url + '/admin/allUsers');
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  // if (this.userResult.user !== null && this.userResult.user.usertype === 'admin') {
  //   sessionStorage.setItem('username', this.userResult.user.email);
  //   sessionStorage.setItem('usertype', this.userResult.user.usertype);
  //   this.router.navigate(['/admin', "user"]);
  // }

  // if ( this.userResult.status === true){
  //   sessionStorage.setItem('username', this.userResult.user.email);
  //   sessionStorage.setItem('usertype', this.userResult.user.usertype);
  // }

  setAuthData(userId: any,firstname: string, usertype: string ) {
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('firstname', firstname);  
    sessionStorage.setItem('userType', usertype);
    this.authStatusListener.next(true);
  }

  clearAuthData(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('userType');
  }

  logout() {
    this.clearAuthData();
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }
}
