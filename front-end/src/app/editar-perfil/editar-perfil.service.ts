import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

<<<<<<< HEAD
  private profissional_url = 'https://tcc-production-33a0.up.railway.app/profissionaldesaude/?cpf=';
=======
  url = URLS;

  private profissionalUrl =  this.url + 'profissionaldesaude/?cpf=';
>>>>>>> ef85b971b846aaaef9e143d831b39f0c1a86f0b5

  constructor(private http: HttpClient) { }

  getPerfilInfo(cpf: any) {
    return this.http.get(`${this.profissional_url}${cpf}`) as Observable<PerfilInfo>;
  }

  updatePerfilInfo(cpf: any, perfil: PerfilInfo) {
    return this.http.put(`${this.profissional_url}${cpf}`, perfil).pipe(take(1));
  }
}
