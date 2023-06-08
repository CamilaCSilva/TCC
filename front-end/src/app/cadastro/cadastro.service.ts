import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // private profissional_url = 'http://localhost:8000/profissionaldesaude/signup'
  private profissional_url = 'https://medvida.up.railway.app/profissionaldesaude/signup'

  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastro_infos: PerfilInfo) {
    return this.http.post(`${this.profissional_url}`, cadastro_infos).pipe(take(1));
  }
}
