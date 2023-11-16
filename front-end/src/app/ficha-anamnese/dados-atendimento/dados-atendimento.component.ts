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
    this.sexo = this.anamnese?.paciente?.sexo;
    this.idade = this.anamnese?.paciente?.idade;
    this.tipoSangue = this.anamnese?.paciente?.tipo_sanguineo;
    this.alergias = this.anamnese?.paciente?.alergias;
    this.medicacoesUsadas = this.anamnese?.paciente?.medicacao_drogas;
    this.historicoDoencas = this.anamnese?.paciente?.historico_doencas;
  }

  voltar(){
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

}
