import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  profissionalUrl = 'http://127.0.0.1:8000/profissionaldesaude/?cpf='

  constructor(private http: HttpClient) {}

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`);
  }
}
