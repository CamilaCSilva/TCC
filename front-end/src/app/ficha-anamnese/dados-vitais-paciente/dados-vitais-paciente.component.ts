import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-vitais-paciente',
  templateUrl: './dados-vitais-paciente.component.html',
  styleUrls: ['./dados-vitais-paciente.component.scss']
})
export class DadosVitaisPacienteComponent implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais';
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
