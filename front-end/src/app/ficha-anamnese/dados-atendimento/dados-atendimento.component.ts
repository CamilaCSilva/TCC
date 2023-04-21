import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento',
  templateUrl: './dados-atendimento.component.html',
  styleUrls: ['./dados-atendimento.component.scss']
})
export class DadosAtendimentoComponent implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  idade: number;
  tipoSangue: string;
  sexo: string;
  alergias: string;
  medicacoesUsadas: string;
  historicoDoencas: string;
  testResult: boolean = false;
  formGroup: FormGroup;

  constructor(private router: Router) { }

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
