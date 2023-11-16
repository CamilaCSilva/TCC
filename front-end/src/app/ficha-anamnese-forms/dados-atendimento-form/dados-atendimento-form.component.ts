import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-form',
  templateUrl: './dados-atendimento-form.component.html',
  styleUrls: ['./dados-atendimento-form.component.scss']
})
export class DadosAtendimentoFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  sexo: string = '';
  classeRadio: string = '';
  tipoSangue: string = '';
  alergias: string = '';
  medicacoesUsadas: string = '';
  historicoDoencas: string = '';
  idade: String = '';
  anamnese: any;
  formGroup: UntypedFormGroup;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  hintText: string = 'O significa Outros';

  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    if(this.anamnese?.paciente?.nome_completo != ''){
      this.sexo = this.anamnese?.paciente?.sexo;
      this.idade = this.anamnese?.paciente?.idade;
      this.tipoSangue = this.anamnese?.paciente?.tipo_sanguineo;
      this.alergias = this.anamnese?.paciente?.alergias;
      this.medicacoesUsadas = this.anamnese?.paciente?.medicacao_drogas;
      this.historicoDoencas = this.anamnese?.paciente?.historico_doencas;
    }
  }

  onSubmit(dadosAtendimento: any){
    this.criarAnamnese(dadosAtendimento);
    if(this.bSeguir == true){
      if(this.verificaDados(this.anamnese)) {
        this.router.navigateByUrl(this.path2, this.anamnese);
      }
    }
    else if(this.bVoltar == true) {
      this.router.navigateByUrl(this.path1, this.anamnese);
    }
  }

  botaoVoltar() {
    this.bVoltar = true;
    this.bSeguir = false;
  }

  botaoSeguir() {
    this.bSeguir = true;
    this.bVoltar = false;
  }

  onSexChange() {
    if(this.sexo == 'F') {
      console.log('Feminino');
      // document.getElementById('F')?.setAttribute('class', 'marked');
      // document.getElementById('M')?.setAttribute('class', '');
      // document.getElementById('O')?.setAttribute('class', '');
    }
    if(this.sexo == 'M') {
      console.log('Masculino');
      // document.getElementById('M')?.setAttribute('class', 'marked');
      // document.getElementById('F')?.setAttribute('class', '');
      // document.getElementById('O')?.setAttribute('class', '');
    }
    if(this.sexo == 'O') {
      console.log('outro');
      // document.getElementById('O')?.setAttribute('class', 'marked');
      // document.getElementById('F')?.setAttribute('class', '');
      // document.getElementById('M')?.setAttribute('class', '');
    }
  }

  private criarAnamnese(dadosAtendimento: any){
    this.anamnese = Object.assign({}, this.anamnese, dadosAtendimento.value);
  }

  private verificaDados(dadosAtendimento: any) {
    let testResult: boolean = false;
    if(dadosAtendimento.idade == undefined || dadosAtendimento.idade == ''){
      alert('Insira a idade')
      throw new Error('Insira a idade');
    }
    else if(dadosAtendimento.tipoSangue == undefined || dadosAtendimento.tipoSangue == '' || dadosAtendimento.tipoSangue.match(/((A|B|AB|O)|(a|b|ab|o))([+|-])/) == null) {
      alert('Tipo sanguíneo inválido');
      throw new Error('Tipo sanguíneo inválido');
    }
    else if(dadosAtendimento.sexo == undefined || dadosAtendimento.sexo == ''){
      alert('Escolha o sexo');
      throw new Error('Escolha o sexo');
    }
    else if (dadosAtendimento.medicacoesUsadas == undefined || dadosAtendimento.medicacoesUsadas == ''){
      alert('Escreva sobre os medicamentos');
      throw new Error('Escreva sobre os medicamentos');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
