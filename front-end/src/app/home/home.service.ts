import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FichasDisponiveisArray } from './home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFichasDisponiveis() {
    // return this.http.get('') as Observable<FichasDisponiveisArray>;
  }
}
