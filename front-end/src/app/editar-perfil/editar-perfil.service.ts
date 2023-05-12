import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  profissionalUrl = 'http://127.0.0.1:8000/profissionaldesaude/?cpf='

  constructor(private http: HttpClient) { }

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`) as Observable<PerfilInfo>;
  }

  updatePerfilInfo(cpf: any, perfilInfos: any) {
    return this.http.put(`${this.profissionalUrl}${cpf}`, perfilInfos);
  }
}
