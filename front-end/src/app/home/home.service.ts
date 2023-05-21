import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Anamnese } from '../models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private profissionalUrl = 'https://tcc-production-33a0.up.railway.app/anamnese/?data='

  constructor(private http: HttpClient) { }

  getFichasDisponiveis(data: any) {
    return this.http.get<Anamnese[]>(`${this.profissionalUrl}${data}`).pipe(tap(console.log));
  }
}
