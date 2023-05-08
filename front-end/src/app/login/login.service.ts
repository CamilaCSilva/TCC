import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfoExistenteArray } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getLoginInfo() {
    return this.http.get('') as Observable<LoginInfoExistenteArray>;
  }
}
