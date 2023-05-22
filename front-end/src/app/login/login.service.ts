import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfoExistenteArray } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private profissional_url = 'https://tcc-production-33a0.up.railway.app/profissionaldesaude/?cpf=';

  constructor(private http: HttpClient) {}

  getLoginInfo(cpf: any) {
    return this.http.get(`${this.profissional_url}${cpf}`) as Observable<LoginInfoExistenteArray>;
  }
}
