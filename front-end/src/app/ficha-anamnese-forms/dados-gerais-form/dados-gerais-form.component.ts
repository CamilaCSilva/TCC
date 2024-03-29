import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosGeraisFormService } from './dados-gerais-form.service';
import { Anamnese } from 'src/app/models/anamnese.model';
import { Notification } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-dados-gerais-form',
  templateUrl: './dados-gerais-form.component.html',
  styleUrls: ['./dados-gerais-form.component.scss']
})
export class DadosGeraisFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form';
  path2: string = 'home';
  nomeParamedico: String;
  documento_trabalho: String;
  date: Date = new Date();
  data = this.date.getFullYear() + '-' + String(this.date.getMonth() + 1).padStart(2, '0') + '-' + String(this.date.getDate()).padStart(2, '0');
  horas = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
  localizacao: String = "";
  localCheck: boolean = false;
  anamneseEnviar: any;
  usuario: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  alertMessage: string = "";
  ficha: Anamnese;
  lat: number = 0;
  long: number = 0;
  anamnese: any;
  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private dadosGeraisFormService: DadosGeraisFormService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.ficha = this.dadosGeraisFormService.get('paciente');
    this.nomeParamedico = this.ficha.nome_paramedico_responsavel;
    this.documento_trabalho = this.ficha.documento_trabalho_paramedico;
    if (this.ficha.local == '' || this.ficha.local == undefined) {
      this.getCurrentLocation();
    }
    else
      this.localizacao = this.ficha.local;
    if (this.alertMessage != "") {
      alert(this.alertMessage);
    }
  }

  voltar(dadosGerais: any) {
    this.criarAnamnese(dadosGerais);
    this.router.navigateByUrl(this.path1);
  }

  enviar(dadosGerais: any) {
    this.criarAnamnese(dadosGerais);
    if (this.verificaDados(this.ficha)) {
      this.coverteParaAnamnese();
      this.setAnamneseInfo();
      // this.getuser();
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

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        const key = true
        if (key) {
          this.dadosGeraisFormService.getEndereço(this.lat.toString(), this.long.toString()).subscribe(
            res => {
              console.log('Localização encontrada')
              this.ficha.local = this.localizacao = res.results[4]["formatted_address"]
            }, err => {
              console.log('Erro ao listar o endereço', err);
              this.ficha.local = this.localizacao = this.lat.toString() + ' ' + this.long.toString()
            }
          )
          this.setAnamneseInfo();
        } else {
          console.log('ativar a key')
        }
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  confereLocalizacao(localizacao: String, modalConfirm: any) {
    modalConfirm.hidden = localizacao.length === 0 ? true : false;
    if(modalConfirm.hidden) {
      this.notificacao = {
        mensagem: 'Insira a localização do paciente', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
    }
  }

  private criarAnamnese(dadosAtendimento: any) {
    console.log(dadosAtendimento.value)
    this.ficha.local = dadosAtendimento.value.localizacao == undefined ? '' : dadosAtendimento.value.localizacao.toString()
    this.ficha.data = this.date;
    this.ficha.hora = this.horas;
    this.dadosGeraisFormService.set('paciente', this.ficha)
  }

  private coverteParaAnamnese() {
    this.anamneseEnviar = {
      cpf: this.ficha.cpf == undefined ? 'N/A' : this.ficha.cpf,
      nome_completo: this.ficha.nome_completo == undefined ? 'N/A' : this.ficha.nome_completo,
      celular: this.ficha.celular == undefined ? 'N/A' : this.ficha.celular,
      sexo: this.ficha.sexo == undefined ? 'N/A' : this.ficha.sexo,
      idade: this.ficha.idade == undefined ? 'N/A' : this.ficha.idade.toString(),
      tipo_sanguineo: this.ficha.tipo_sanguineo == undefined ? 'N/A' : this.ficha.tipo_sanguineo,
      alergias: this.ficha.alergias == undefined ? 'N/A' : this.ficha.alergias,
      medicacao_drogas: this.ficha.medicacao_drogas == undefined ? 'N/A' : this.ficha.medicacao_drogas,
      historico_doencas: this.ficha.historico_doencas == undefined ? 'N/A' : this.ficha.historico_doencas,
      queixa_principal: this.ficha.queixa_principal == undefined ? 'N/A' : this.ficha.queixa_principal,
      nivel_dor: this.ficha.nivel_dor == undefined ? 'N/A' : this.ficha.nivel_dor.toString(),
      classificacao_risco: this.ficha.classificacao_risco == undefined ? 'N/A' : this.ficha.classificacao_risco,
      observacoes: this.ficha.observacoes == undefined ? 'N/A' : this.ficha.observacoes,
      pressao_sanguinea: this.ficha.pressao_sanguinea == undefined ? 'N/A' : this.ficha.pressao_sanguinea,
      oxigenacao: this.ficha.oxigenacao == undefined ? 'N/A' : this.ficha.oxigenacao,
      temperatura: this.ficha.temperatura == undefined ? 'N/A' : this.ficha.temperatura,
      frequencia_cardiaca: this.ficha.frequencia_cardiaca == undefined ? 'N/A' : this.ficha.frequencia_cardiaca,
      data: this.data,
      hora: this.horas,
      local: this.ficha.local == undefined ? 'N/A' : this.ficha.local,
      paramedico: this.ficha.paramedico == undefined ? 'N/A' : this.ficha.paramedico
    }
  }

  private setAnamneseInfo() {
    this.dadosGeraisFormService.setAnamneseInfo(this.anamneseEnviar).subscribe(
      success => { 
        this.notificacao = {
          mensagem: 'Ficha salva com sucesso!', 
          classe: 'alert-success', 
          validacao: true 
        };
        this.limparNotificacao();
        setTimeout(() => {
          this.router.navigateByUrl(this.path2);
        }, 2000);
        this.dadosGeraisFormService.delete('paciente');
      },
      error => {
        console.log(error);
        this.notificacao = {
          mensagem: 'Erro ao salvar ficha', 
          classe: 'alert-danger', 
          validacao: true 
        };
        this.limparNotificacao();
      },
      () => console.log('request completo')
    );
  }

  private verificaDados(dadosAtendimento: Anamnese) {
    let testResult: boolean = false;
    if (dadosAtendimento.local == undefined || dadosAtendimento.local == '') {
      this.notificacao = {
        mensagem: 'Insira a localização do paciente', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Insira a localização do paciente');
    }
    else {
      testResult = true;
    }
    return testResult;
  }
}
