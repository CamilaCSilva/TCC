import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
<<<<<<< HEAD
  url = URLS;
=======

<!--   url = 'https://tcc-production-33a0.up.railway.app/'; -->
  url = 'http://localhost:8000/'
>>>>>>> 2a3a14936869b7ffbe050c97cf7a3c5e5ae3bbd8

  private profissional_url = this.url + '/profissionaldesaude/signup'

  profissionalUrl = 'https://tcc-production-33a0.up.railway.app/profissionaldesaude/'

  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastro_infos: PerfilInfo) {
    console.log(cadastro_infos);
    return this.http.post(`${this.profissional_url}`, cadastro_infos).pipe(take(1));
  }
}
