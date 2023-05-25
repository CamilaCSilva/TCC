import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  profissionalUrl = 'https://tcc-production-33a0.up.railway.app/profissionaldesaude/'


  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastroInfos: PerfilInfo) {
    return this.http.post(`${this.profissionalUrl}`, cadastroInfos).pipe(take(1));
  }
}
