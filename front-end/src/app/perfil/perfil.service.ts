import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilInfoExistenteArray } from './perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) {}

  getPerfilInfo() {
    return this.http.get('') as Observable<PerfilInfoExistenteArray>;
  }
}
