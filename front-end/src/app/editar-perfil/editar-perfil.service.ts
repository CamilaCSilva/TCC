import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  // url = 'https://tcc-production-33a0.up.railway.app/';
  url = 'http://localhost:8000/';

  private profissionalUrl =  this.url + 'profissionaldesaude/';

  constructor(private http: HttpClient) { }

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissionalUrl}?cpf=13168035629`) as Observable<PerfilInfo>;
  }

  updatePerfilInfo(cpf: any, perfil: PerfilInfo) {
    return this.http.put(`${this.profissionalUrl}edit/`, perfil).pipe(take(1));
  }
}
