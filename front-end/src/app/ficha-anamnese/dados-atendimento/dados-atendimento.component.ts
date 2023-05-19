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
  anamnese: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    console.log(this.anamnese)
    this.sexo = this.anamnese.sexo;
    this.idade = this.anamnese.idade;
    this.tipoSangue = this.anamnese.tipo_sanguineo    ;
    this.alergias = this.anamnese.alergias;
    this.medicacoesUsadas = this.anamnese.medicacao_drogas;
    this.historicoDoencas = this.anamnese.historico_doencas;
  }

  voltar(){
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

}
