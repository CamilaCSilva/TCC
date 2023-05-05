import { Injectable } from '@angular/core';
import { PerfilInfoArray } from './editar-perfil.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  constructor(private http: HttpClient) { }

  setPerfilInfo(perfilInfos: PerfilInfoArray) {
    // return this.http.post('');
  }
}
