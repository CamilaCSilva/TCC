import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento',
  templateUrl: './dados-atendimento.component.html',
  styleUrls: ['./dados-atendimento.component.scss']
})
export class DadosAtendimentoComponent implements OnInit {

  path1: string = 'ficha/identificacao-paciente';
  path2: string = 'ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
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
    if(this.idade && this.tipoSangue && this.alergias && this.medicacoesUsadas && this.historicoDoencas) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
