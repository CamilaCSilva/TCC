import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anamnese } from 'src/app/models/anamnese.model';
import { FichaAnamneseService } from '../ficha-anamnese-forms.service';
import { Notification } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-dados-atendimento-parte2-form',
  templateUrl: './dados-atendimento-parte2-form.component.html',
  styleUrls: ['./dados-atendimento-parte2-form.component.scss']
})
export class DadosAtendimentoParte2FormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form';
  sintomas: String;
  nivelDor: String;
  prioridade: String = 'nao-urgente';
  observacoes: String;
  anamnese: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  ficha: Anamnese;
  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente')
    if (this.ficha.queixa_principal != '' && this.ficha.queixa_principal != undefined) {
      this.sintomas = this.ficha.queixa_principal;
      this.nivelDor = this.ficha.nivel_dor;
      this.prioridade = this.ficha.classificacao_risco;
      this.observacoes = this.ficha.observacoes;
    }
  }

  onSubmit(dadosAtendimentoParte2: any) {
    this.criarAnamnese(dadosAtendimentoParte2);
    if (this.bSeguir == true) {
      if (this.verificaDados(this.ficha)) {
        this.router.navigateByUrl(this.path2);
      }
    }
    else if (this.bVoltar == true) {
      this.router.navigateByUrl(this.path1);
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

  limparNotificacao() {
    setTimeout(() => {
      this.notificacao = {
        mensagem: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }

  onPrioridadeChange(prioridade: String) {
    if (prioridade == 'nao-urgente') {
      console.log('Não urgente');
    }
    else if (prioridade == 'pouco-urgente') {
      console.log('Pouco urgente');
    }
    else if (prioridade == 'urgente') {
      console.log('Urgente');
    }
    else if (prioridade == 'emergencia') {
      console.log('Emergência');
    }
  }

  getPrioridade(event: Event) {
    this.prioridade = (event.target as HTMLInputElement).value;
    return this.prioridade;
  }

  private criarAnamnese(dadosAtendimento: any) {
    this.ficha.queixa_principal = dadosAtendimento.value.sintomas;
    this.ficha.nivel_dor = dadosAtendimento.value.nivelDor;
    this.ficha.classificacao_risco = dadosAtendimento.value.prioridade;
    this.ficha.observacoes = dadosAtendimento.value.observacoes;
    this.fichaFormsService.set('paciente', this.ficha);
  }

  private verificaDados(ficha: Anamnese) {
    let testResult: boolean = false;
    if (ficha.queixa_principal == undefined) {
      this.notificacao = {
        mensagem: 'Insira os sintomas', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Insira os sintomas');
    }
    else if (ficha.nivel_dor == undefined || ficha.nivel_dor == '') {
      this.notificacao = {
        mensagem: 'Insira o nivel de dor do paciente', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Insira o nivel de dor do paciente');
    }
    else if (ficha.classificacao_risco == undefined || ficha.classificacao_risco == '') {
      this.notificacao = {
        mensagem: 'Insira a prioridade do paciente', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Insira a prioridade do paciente');
    }
    else {
      testResult = true;
    }
    return testResult;
  }
}
