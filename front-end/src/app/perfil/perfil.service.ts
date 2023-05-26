import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = 'https://tcc-production-33a0.up.railway.app/';
  // private url = 'http://localhost:8000/'

  header: any = localStorage.getItem('Token')

  private profissional_url = this.url + 'profissionaldesaude/?cpf=13168035629' // trocar o ?cpf=13168035629 por user

  constructor(private http: HttpClient) {}

  getPerfilInfo(cpf: any) {
    return this.http.get(      
      `${this.profissional_url}`,{
        headers: this.header,
      }
      ) as Observable<PerfilInfo>;
  }
}
