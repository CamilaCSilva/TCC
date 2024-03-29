import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { Anamnese } from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://medvidatcc.fly.dev/';
  // url = 'http://localhost:8000/';

  private storage: Storage;
  nome: string = '';

  private profissionalUrl = this.url + 'profissionaldesaude/'
  private anamineseUrl = this.url + 'anamnese/?data='

  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
  }

  set(usuario: string, paciente: any): boolean{
    if(this.storage){
      this.storage.setItem(usuario, JSON.stringify(paciente));
      console.log("Paciente armazenado com sucesso")
      return true
    }
    console.log("Erro ao armazenar paciente")
    return false
  }

  getUser(){
    return this.http.get(`${this.profissionalUrl}user`,{withCredentials: true});
  }

  getLogoutUser(){
    return this.http.post(`${this.profissionalUrl}logout`, {}, {withCredentials: true});
  }

  getFichasDisponiveis(data: any) {
    return this.http.get<Anamnese[]>(`${this.anamineseUrl}${data}`).pipe(tap());
  }
}
