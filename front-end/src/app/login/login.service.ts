import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { LoginInfo } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private profissional_url = 'http://localhost:8000/profissionaldesaude/login';
  private profissional_url = 'https://medvidatcc.fly.dev/profissionaldesaude/login';

  constructor(private http: HttpClient) {}

  getLoginInfo(login_info: LoginInfo) {
    return this.http.post(`${this.profissional_url}`, login_info, {withCredentials: true}).pipe(take(1));
  }
}
