import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-form',
  templateUrl: './dados-atendimento-form.component.html',
  styleUrls: ['./dados-atendimento-form.component.scss']
})
export class DadosAtendimentoFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  idade: number;
  tipoSangue: string;
  sexo: string = 'f';
  alergias: string;
  medicacoesUsadas: string;
  historicoDoencas: string;
  testResult: boolean = false;
  formGroup: FormGroup;

  constructor(private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    this.verificaDados();
    if(this.idade && this.testResult && this.sexo != '' && this.medicacoesUsadas.length > 0) {
      this.router.navigateByUrl(this.path2);
    }
  }

  onSexChange() {
    if(this.sexo == 'f') {
      console.log('Feminino');
    }
    if(this.sexo == 'm') {
      console.log('Masculino');
    }
    if(this.sexo == 'o') {
      console.log('outro');
    }
  }

  private verificaDados() {
    if(this.tipoSangue && this.tipoSangue.match(/((A|B|AB|O)|(a|b|ab|o))([+|-])/) == null) {
      throw new Error('Tipo sanguíneo inválido');
    }
    else {
      this.testResult = true;
    }
  }

}
