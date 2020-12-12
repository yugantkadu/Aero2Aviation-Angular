import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserProfileService
{
  constructor(private http : HttpClient) { }

  CallUserProfile(userId: string): Observable<any>
  {
    const url = 'http://localhost:7071/user/userById/' + userId;
    return this.http.get<any>(url);
  }
}
