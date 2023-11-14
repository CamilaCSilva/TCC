import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilInfo } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class FichaAnamneseService {
  private url = 'https://medvidatcc.fly.dev/profissionaldesaude/?cpf=';
  // private url = 'http://localhost:8000/profissionaldesaude/?cpf=

  constructor(private http: HttpClient) { }

  getParamedicoInfo(cpf: String) {
    return this.http.get(`${this.url}${cpf}`, {withCredentials: true}) as Observable<PerfilInfo>
  }

}
