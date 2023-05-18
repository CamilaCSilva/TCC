import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Anamnese } from 'src/app/models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisFormService {

  private anamneseUrl = 'http://127.0.0.1:8000/anamnese/'

  constructor(private http: HttpClient) { }

  setAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.post(`${this.anamneseUrl}`, anamneseInfos).pipe(take(1));
  }

}
