import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento',
  templateUrl: './dados-atendimento.component.html',
  styleUrls: ['./dados-atendimento.component.scss']
})
export class DadosAtendimentoComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  idade: number;
  tipoSangue: string;
  sexo: string;
  alergias: string;
  medicacoesUsadas: string;
  historicoDoencas: string;
  testResult: boolean = false;
  formGroup: UntypedFormGroup;
  tipo: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    this.router.navigateByUrl(this.path2);
  }

}
