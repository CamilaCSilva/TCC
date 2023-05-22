import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { URLS } from '../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = URLS;

  private profissionalUrl = this.url + 'profissionaldesaude/'


  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastroInfos: PerfilInfo) {
    return this.http.post(`${this.profissionalUrl}`, cadastroInfos).pipe(take(1));
  }
}
