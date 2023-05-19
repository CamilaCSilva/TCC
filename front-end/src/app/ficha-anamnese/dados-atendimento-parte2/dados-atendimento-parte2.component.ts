import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-parte2',
  templateUrl: './dados-atendimento-parte2.component.html',
  styleUrls: ['./dados-atendimento-parte2.component.scss']
})
export class DadosAtendimentoParte2Component implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  sintomas: string;
  nivelDor: number;
  prioridade: string = 'nao-urgente';
  observacoes: string;
  anamnese: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.sintomas = this.anamnese.queixa_principal;
    this.nivelDor = this.anamnese.nivel_dor;
    this.prioridade = this.anamnese.classificacao_risco;
    this.observacoes = this.anamnese.observacoes;
  }

  voltar() {
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }
}
