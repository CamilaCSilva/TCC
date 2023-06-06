import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Anamnese } from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // url = 'https://tcc-production-33a0.up.railway.app/';
  url = 'http://localhost:8000/';

  private profissionalUrl = this.url + 'profissionaldesaude/user'
  private anamineseUrl = this.url + 'anamnese/?data='

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(`${this.profissionalUrl}`,{withCredentials: true});
  }

  getFichasDisponiveis(data: any) {
    return this.http.get<Anamnese[]>(`${this.anamineseUrl}${data}`).pipe(tap(console.log));
  }
}
