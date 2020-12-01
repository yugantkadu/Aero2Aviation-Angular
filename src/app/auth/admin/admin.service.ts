import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';

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
}
