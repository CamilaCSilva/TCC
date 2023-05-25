import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  <!--   url = 'https://tcc-production-33a0.up.railway.app/'; -->
  url = 'http://localhost:8000/'

  private profissional_url = url

  private profissionalUrl = this.url + 'profissionaldesaude/?cpf='

  constructor(private http: HttpClient) {}

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`) as Observable<PerfilInfo>;
  }
}
