import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilInfo } from '../models/perfil.model';
import {Anamnese} from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class FichaAnamneseService {
  private url = 'https://medvidatcc.fly.dev/profissionaldesaude/?cpf=';
  // private url = 'http://localhost:8000/profissionaldesaude/?cpf=

  private storage: Storage;
  anamnese: Anamnese;

  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
  }

  get(usuario: string): any{
    if(this.storage){
      const anamneseJSON = this.storage.getItem(usuario)
      this.anamnese = anamneseJSON !== null ? JSON.parse(anamneseJSON) : new Anamnese();
      return this.anamnese
    }
    return null;
  }

  getParamedicoInfo(cpf: String) {
    return this.http.get(`${this.url}${cpf}`, {withCredentials: true}) as Observable<PerfilInfo>
  }

}
