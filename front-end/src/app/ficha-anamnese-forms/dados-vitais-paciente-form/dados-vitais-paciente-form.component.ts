import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-vitais-paciente-form',
  templateUrl: './dados-vitais-paciente-form.component.html',
  styleUrls: ['./dados-vitais-paciente-form.component.scss']
})
export class DadosVitaisPacienteFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form';
  pressao: number;
  oxigenacao: number;
  temperatura: number;
  frequenciaRitmica: number;
  testResult: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.pressao && this.oxigenacao && this.temperatura && this.frequenciaRitmica) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
