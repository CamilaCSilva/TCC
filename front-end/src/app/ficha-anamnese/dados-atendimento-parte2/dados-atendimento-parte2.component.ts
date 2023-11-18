import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { FichaAnamneseService } from '../ficha-anamnese.service';
import { Anamnese } from 'src/app/models/anamnese.model';

@Component({
  selector: 'app-dados-atendimento-parte2',
  templateUrl: './dados-atendimento-parte2.component.html',
  styleUrls: ['./dados-atendimento-parte2.component.scss']
})
export class DadosAtendimentoParte2Component implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  sintomas: String;
  nivelDor: String;
  prioridade: String = 'nao-urgente';
  observacoes: String;
  anamnese: any;
  nome: string;
  ficha: Anamnese;

  constructor(private router: Router, private homeService: HomeService, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.homeService.value.subscribe(
      value => this.nome = value
    );
    this.ficha = this.fichaAnamneseService.get('ficha')
    this.sintomas = this.ficha.queixa_principal;
    this.nivelDor = this.ficha.nivel_dor;
    this.prioridade = this.ficha.classificacao_risco;
    this.observacoes = this.ficha.observacoes;
  }

  voltar() {
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }
}
