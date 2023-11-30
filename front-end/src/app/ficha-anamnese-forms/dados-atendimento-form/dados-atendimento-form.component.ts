import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAnamneseService } from '../ficha-anamnese-forms.service';
import { Anamnese } from 'src/app/models/anamnese.model';
import { Notification } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-dados-atendimento-form',
  templateUrl: './dados-atendimento-form.component.html',
  styleUrls: ['./dados-atendimento-form.component.scss']
})
export class DadosAtendimentoFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  sexo: String = '';
  classeRadio: String = '';
  tipoSangue: String = '';
  alergias: String = '';
  medicacoesUsadas: String = '';
  historicoDoencas: String = '';
  idade: Int16Array;
  anamnese: any;
  formGroup: UntypedFormGroup;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  hintText: string = 'O significa Outros';
  ficha: Anamnese;
  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente')
    if(this.ficha.sexo != '' && this.ficha.sexo != undefined){
      this.sexo = this.ficha.sexo;
      this.idade = this.ficha.idade;
      this.tipoSangue = this.ficha.tipo_sanguineo;
      this.alergias = this.ficha.alergias;
      this.medicacoesUsadas = this.ficha.medicacao_drogas;
      this.historicoDoencas = this.ficha.historico_doencas;
    }
  }

  onSubmit(dadosAtendimento: any){
    this.criarAnamnese(dadosAtendimento);
    if(this.bSeguir == true){
      if(this.verificaDados(this.ficha))
        this.router.navigateByUrl(this.path2);
    }
    else if(this.bVoltar == true){
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

  onSexChange() {
    if(this.sexo == 'F') {
      console.log('Feminino');
    }
    if(this.sexo == 'M') {
      console.log('Masculino');
    }
    if(this.sexo == 'O') {
      console.log('outro');
    }
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

  private criarAnamnese(dadosAtendimento: any){
    // SETANDO INFORMAÇÕES LOCALMENTE
    this.ficha.idade = dadosAtendimento.value.idade;
    this.ficha.tipo_sanguineo = dadosAtendimento.value.tipoSangue;
    this.ficha.sexo = dadosAtendimento.value.sexo;
    this.ficha.medicacao_drogas = dadosAtendimento.value.medicacoesUsadas;
    this.ficha.historico_doencas = dadosAtendimento.value.historicoDoencas;
    this.ficha.alergias = dadosAtendimento.value.alergias;
    this.fichaFormsService.set('paciente', this.ficha);
  }

  private verificaDados(ficha: Anamnese) {
    let testResult: boolean = false;
    if(ficha.idade == undefined || ficha.idade == null){
      this.notificacao = {
        mensagem: 'Insira a idade', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Insira a idade');
    }
    else if(ficha.tipo_sanguineo == undefined || ficha.tipo_sanguineo == '' || ficha.tipo_sanguineo.match(/((A|B|AB|O)|(a|b|ab|o))([+|-])/) == null) {
      this.notificacao = {
        mensagem: 'Tipo sanguíneo inválido', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Tipo sanguíneo inválido');
    }
    else if(ficha.sexo == undefined || ficha.sexo == ''){
      this.notificacao = {
        mensagem: 'Escolha o sexo', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Escolha o sexo');
    }
    else if (ficha.alergias == undefined || ficha.alergias == ''){
      this.notificacao = {
        mensagem: 'Escreva sobre as alergias', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Escreva sobre as alergias');
    }
    else if (ficha.medicacao_drogas == undefined || ficha.medicacao_drogas == ''){
      this.notificacao = {
        mensagem: 'Escreva sobre os medicamentos', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Escreva sobre os medicamentos');
    }
    else if (ficha.historico_doencas == undefined || ficha.historico_doencas == ''){
      this.notificacao = {
        mensagem: 'Escreva sobre o histórico médico', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Escreva sobre o histórico médico');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
