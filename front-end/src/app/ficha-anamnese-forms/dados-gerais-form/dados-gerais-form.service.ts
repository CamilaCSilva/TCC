import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Anamnese } from 'src/app/models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisFormService {

  private anamneseUrl = 'https://tcc-production-33a0.up.railway.app/anamnese/'

  constructor(private http: HttpClient) { }

  setAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.post(`${this.anamneseUrl}`, anamneseInfos).pipe(take(1));
  }

}
