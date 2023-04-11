import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.scss']
})
export class DadosGeraisComponent implements OnInit {

  path1: string = 'ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  path2: string = 'ficha/identificacao-paciente/dados-atendimento';
  nomeParamedico: string;
  crmCorenDrf: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.nomeParamedico && this.crmCorenDrf) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
