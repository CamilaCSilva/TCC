import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anamnese } from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class FichaAnamneseService {

  private anamneselUrl = 'http://127.0.0.1:8000/anamnese/?cpf=';

  constructor(private http: HttpClient) { }

  getAnamneseInfo(cpf: String) {
    return this.http.get(`${this.anamneselUrl}${cpf}`) as Observable<Anamnese>;
  }

}
