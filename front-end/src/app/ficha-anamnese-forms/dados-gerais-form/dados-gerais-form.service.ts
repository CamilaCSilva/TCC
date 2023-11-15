import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Anamnese } from 'src/app/models/anamnese.model';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisFormService {

  url = 'https://medvidatcc.fly.dev/';
  // url = 'http://localhost:8000/'

  private anamneseAddUrl = this.url + 'anamnese/add';
  private anamneseEditUrl = this.url+ 'anamnese/edit';

  constructor(private http: HttpClient) { }

  setAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.post(`${this.anamneseAddUrl}`, anamneseInfos).pipe(take(1));
  }

  editAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.put(`${this.anamneseEditUrl}`, anamneseInfos).pipe(take(1));
  }
}
