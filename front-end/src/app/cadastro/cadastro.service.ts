import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private profissionalUrl = 'http://127.0.0.1:8000/profissionaldesaude/'


  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastroInfos: PerfilInfo) {
    return this.http.post(`${this.profissionalUrl}`, cadastroInfos).pipe(take(1));
  }
}
