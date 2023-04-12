import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento',
  templateUrl: './dados-atendimento.component.html',
  styleUrls: ['./dados-atendimento.component.scss']
})
export class DadosAtendimentoComponent implements OnInit {

  path1: string = 'login/ficha/identificacao-paciente';
  path2: string = 'login/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  idade: number;
  tipoSangue: string;
  sexo: string;
  alergias: string;
  medicacoesUsadas: string;
  historicoDoencas: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.idade && this.tipoSangue) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
