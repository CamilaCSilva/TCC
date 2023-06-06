import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilInfo } from '../models/perfil.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  // url = 'https://tcc-production-33a0.up.railway.app/';
  url = 'http://localhost:8000/';

  private profissionalUrl =  this.url + 'profissionaldesaude/';

  constructor(private http: HttpClient) { }

  getPerfilInfo() {
    return this.http.get(`${this.profissionalUrl}user`,{withCredentials: true}) as Observable<PerfilInfo>;
  }

  updatePerfilInfo(perfil: PerfilInfo) {
    return this.http.put(`${this.profissionalUrl}edit/`, perfil  ,{withCredentials: true}).pipe(take(1));
  }

  getLogoutUser(){
    return this.http.post(`${this.profissionalUrl}logout`, {}, {withCredentials: true});
  }
}
