import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Anamnese } from 'src/app/models/anamnese.model';
import { PerfilInfo } from 'src/app/models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisFormService {

  url = 'https://medvidatcc.fly.dev/';
  // url = 'http://localhost:8000/'

  private anamneseUrl = this.url + 'anamnese/add'

  private storage: Storage;
  perfil: PerfilInfo;

  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
  }

  get(key_usuario: string): any{
    if(this.storage){
      const usuarioJSON = this.storage.getItem(key_usuario)
      this.perfil = usuarioJSON !== null ? JSON.parse(usuarioJSON) : new PerfilInfo();
      return this.perfil
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

  setAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.post(`${this.anamneseUrl}`, anamneseInfos).pipe(take(1));
  }

}
