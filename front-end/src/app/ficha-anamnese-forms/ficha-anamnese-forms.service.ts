import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anamnese } from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class FichaAnamneseService {

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

}
