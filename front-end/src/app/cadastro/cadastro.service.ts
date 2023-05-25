import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { URLS } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  url = 'http://localhost:8000/'

  private profissional_url = this.url + '/profissionaldesaude/signup'

  profissionalUrl = 'https://tcc-production-33a0.up.railway.app/profissionaldesaude/'

  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastro_infos: PerfilInfo) {
    console.log(cadastro_infos);
    return this.http.post(`${this.profissional_url}`, cadastro_infos).pipe(take(1));
  }
}
