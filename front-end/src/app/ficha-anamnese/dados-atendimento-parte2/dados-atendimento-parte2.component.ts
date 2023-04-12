import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-parte2',
  templateUrl: './dados-atendimento-parte2.component.html',
  styleUrls: ['./dados-atendimento-parte2.component.scss']
})
export class DadosAtendimentoParte2Component implements OnInit {

  path1: string = 'login/ficha/identificacao-paciente/dados-atendimento';
  path2: string = 'login/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  sintomas: string;
  nivelDor: number;
  prioridade: string;
  observacoes: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.nivelDor) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
