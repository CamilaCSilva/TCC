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

  get(key_ficha: string): any{
    if(this.storage){
      const anamneseJSON = this.storage.getItem(key_ficha)
      this.anamnese = anamneseJSON !== null ? JSON.parse(anamneseJSON) : new Anamnese();
      return this.anamnese
    }
    return null;
  }

  set(key_ficha: string, paciente: any): boolean{
    if(this.storage){
      this.storage.setItem(key_ficha, JSON.stringify(paciente));
      console.log("Paciente armazenado com sucesso")
      return true
    }
    console.log("Erro ao armazenar paciente")
    return false
  }

  delete(key_ficha: string) {
    this.storage.removeItem(key_ficha)
  }

  getParamedicoInfo(cpf: String) {
    return this.http.get(`${this.url}${cpf}`, {withCredentials: true}) as Observable<PerfilInfo>
  }

}
