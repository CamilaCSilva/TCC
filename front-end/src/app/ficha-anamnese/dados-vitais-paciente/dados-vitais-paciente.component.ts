import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { FichaAnamneseService } from '../ficha-anamnese.service';
import { Anamnese } from 'src/app/models/anamnese.model';

@Component({
  selector: 'app-dados-vitais-paciente',
  templateUrl: './dados-vitais-paciente.component.html',
  styleUrls: ['./dados-vitais-paciente.component.scss']
})
export class DadosVitaisPacienteComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais';
  pressao: String;
  oxigenacao: String;
  temperatura: String;
  frequenciaRitmica: String;
  anamnese: any;
  nome: string;
  ficha: Anamnese;

  constructor(private router: Router, private homeService: HomeService, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    
  }

  ngOnInit(): void {
    this.ficha = this.fichaAnamneseService.get('ficha')
    this.pressao = this.ficha.pressao_sanguinea;
    this.oxigenacao = this.ficha.oxigenacao;
    this.temperatura = this.ficha.temperatura;
    this.frequenciaRitmica = this.ficha.frequencia_cardiaca;
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    this.router.navigateByUrl(this.path2);
  }

}
