import { Injectable } from '@angular/core';
import { PerfilInfoArray } from './editar-perfil.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  profissionalUrl = 'http://127.0.0.1:8000/profissionaldesaude/?cpf='

  constructor(private http: HttpClient) { }

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`);
  }

  updatePerfilInfo(cpf: any, perfilInfos: any) {
    return this.http.put(`${this.profissionalUrl}${cpf}`, perfilInfos);
  }
}
