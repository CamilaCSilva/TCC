import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  setLoginInfo(loginInfo: String[]) {
    // return this.http.post('');
  }
}
