import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-vitais-paciente',
  templateUrl: './dados-vitais-paciente.component.html',
  styleUrls: ['./dados-vitais-paciente.component.scss']
})
export class DadosVitaisPacienteComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais';
  pressao: number;
  oxigenacao: number;
  temperatura: number;
  frequenciaRitmica: number;
  anamnese: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.pressao = this.anamnese?.paciente?.pressao_sanguinea;
    this.oxigenacao = this.anamnese?.paciente?.oxigenacao;
    this.temperatura = this.anamnese?.paciente?.temperatura;
    this.frequenciaRitmica = this.anamnese?.paciente?.frequencia_ritmica;
  }

  voltar(){
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

}
