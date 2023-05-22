import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';
import { URLS } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url = URLS;

  private profissionalUrl = this.url + 'profissionaldesaude/?cpf='

  constructor(private http: HttpClient) {}

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`) as Observable<PerfilInfo>;
  }
}
