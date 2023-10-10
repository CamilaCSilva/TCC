import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = 'https://medvidatcc.fly.dev/';
  // private url = 'http://localhost:8000/'

  private profissional_url = this.url + 'profissionaldesaude/' // trocar o ?cpf=13168035629 por user

  constructor(private http: HttpClient) {}

  getPerfilInfo() {
    return this.http.get(`${this.profissional_url}user`, {withCredentials: true}) as Observable<PerfilInfo>;
  }

  getLogoutUser() {
    return this.http.post(`${this.profissional_url}logout`, {}, {withCredentials: true});
  }

  deleteUser(cpf: String) {
    cpf = cpf.replace(/-/g, "").replace(".", "").replace(".", "");
    return this.http.delete(`${this.profissional_url}delete/?cpf=${cpf}`, { withCredentials: true });
  }
}
