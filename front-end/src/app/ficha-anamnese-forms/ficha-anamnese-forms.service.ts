import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anamnese } from '../models/anamnese.model';
import { PerfilInfo } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaAnamneseService {
  private url = 'https://medvidatcc.fly.dev/profissionaldesaude/?cpf=';
  // private url = 'http://localhost:8000/profissionaldesaude/?cpf=

  private storage: Storage;
  ficha: Anamnese;

  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
   }

   get(key_ficha: string): any{
    if(this.storage){
      const fichaJSON = this.storage.getItem(key_ficha)
      this.ficha = fichaJSON !== null ? JSON.parse(fichaJSON) : new Anamnese();
      return this.ficha
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
