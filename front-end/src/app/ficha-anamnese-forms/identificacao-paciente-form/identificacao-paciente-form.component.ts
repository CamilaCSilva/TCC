import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAnamneseService } from '../ficha-anamnese-forms.service';
import { Anamnese } from 'src/app/models/anamnese.model';
import { Notification } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-identificacao-paciente-form',
  templateUrl: './identificacao-paciente-form.component.html',
  styleUrls: ['./identificacao-paciente-form.component.scss']
})
export class IdentificacaoPacienteFormComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form';
  message: string = '';
  anamnese: any;
  nomeCompleto: String = '';
  cpf_paciente: String = '';
  celular_paciente: String = '';
  ficha: Anamnese;
  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(
    private router: Router, 
    private activatedRoute : ActivatedRoute, 
    private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente');
    if(this.ficha.nome_completo != '' && this.ficha.nome_completo != undefined){
      this.nomeCompleto = this.ficha.nome_completo;
      this.cpf_paciente = this.ficha.cpf;
      this.celular_paciente = this.ficha.celular;
    }
  }

  seguir() {
    if(this.verificaDados()){
      // SETANDO INFORMAÇÕES LOCALMENTE
      this.ficha.nome_completo = this.nomeCompleto;
      this.ficha.cpf = this.cpf_paciente.replace(/-/g, "").replace(".", "").replace(".", "");
      this.ficha.celular = this.celular_paciente.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.fichaFormsService.set('paciente', this.ficha);
      this.router.navigateByUrl(this.path2);
    }
  }

  voltar() {
    this.fichaFormsService.delete('paciente');
    this.router.navigateByUrl(this.path1);
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

  private verificaDados(): boolean {
    let testResult: boolean = false;
    if(this.nomeCompleto == undefined || this.nomeCompleto.length < 6) {
      this.notificacao = {
        mensagem: 'Nome incompleto', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Nome incompleto');
    }
    else if(this.cpf_paciente == undefined || this.cpf_paciente.length < 11 || this.cpf_paciente.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')) == null) {
      this.notificacao = {
        mensagem: 'CPF no formato errado ou com menos caracteres do que esperado', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('CPF incompleto');
    }
    else if(this.celular_paciente == undefined || this.celular_paciente.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      this.notificacao = {
        mensagem: 'Celular no formato inesperado', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Celular incorreto');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
