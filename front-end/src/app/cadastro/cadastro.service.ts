import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroInfoArray } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {}

  setCadastroInfo(cadastroInfos: CadastroInfoArray) {
    // return this.http.post('');
  }
}
