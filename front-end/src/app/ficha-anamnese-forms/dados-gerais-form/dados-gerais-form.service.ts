import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Anamnese } from 'src/app/models/anamnese.model';
import { URLS } from 'src/app/models/url.model';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisFormService {

  url = URLS;

  private anamneseUrl = this.url + 'anamnese/'

  constructor(private http: HttpClient) { }

  setAnamneseInfo(anamneseInfos: Anamnese) {
    console.log(anamneseInfos);
    return this.http.post(`${this.anamneseUrl}`, anamneseInfos).pipe(take(1));
  }

}
