import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  <!--   url = 'https://tcc-production-33a0.up.railway.app/'; -->
  url = 'http://localhost:8000/';

  private profissionalUrl =  this.url + 'profissionaldesaude/?cpf=';

  constructor(private http: HttpClient) { }

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}${cpf}`) as Observable<PerfilInfo>;
  }

  updatePerfilInfo(cpf: any, perfil: PerfilInfo) {
    return this.http.put(`${this.profissionalUrl}${cpf}`, perfil).pipe(take(1));
  }
}
