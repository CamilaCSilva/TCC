import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosGeraisFormService } from './dados-gerais-form.service';

@Component({
  selector: 'app-dados-gerais-form',
  templateUrl: './dados-gerais-form.component.html',
  styleUrls: ['./dados-gerais-form.component.scss']
})
export class DadosGeraisFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form';
  path2: string = 'home';
  nomeParamedico: string;
  documento_trabalho: string;
  date: Date = new Date();
  data = this.date.getDate() + '/' + (this.date.getMonth()+1) + '/' + this.date.getFullYear();
  horas = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
  localizacao: string;
  anamnese: any;
  anamneseEnviar: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  alertMessage: string = "";
  // location: Location;
  // lat: any;
  // lng: any;

  constructor(private router: Router, private dadosGeraisFormService: DadosGeraisFormService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
    // this.location = location;
  }

  ngOnInit(): void {
    this.nomeParamedico = this.anamnese.nomeCompleto;
    this.documento_trabalho = this.anamnese.documento_trabalho;
    this.localizacao = this.anamnese.localizacao;
    if(this.alertMessage != "") {
      alert(this.alertMessage);
    }
  }

  voltar(dadosGerais: any) {
    this.criarAnamnese(dadosGerais);
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  alert() {
    alert('Dados incompletos');
  }

  enviar(dadosGerais: any) {
    this.criarAnamnese(dadosGerais);
    if(this.verificaDados(this.anamnese)){
      // this.coverteParaAnamnese();
      this.anamnese.data = this.data;
      this.anamnese.hora = this.horas;
      this.setAnamneseInfo()
      // this.router.navigateByUrl(this.path2);
    }
  }

  private criarAnamnese(dadosAtendimento: any){
    this.anamnese = Object.assign({}, this.anamnese, dadosAtendimento.value);
  }

  private coverteParaAnamnese(){
    this.anamneseEnviar.cpf = '';
    this.anamneseEnviar.nome_completo = this.anamnese.nomeCompleto == undefined ? '' : this.anamnese.cpf;
    this.anamneseEnviar.celular = this.anamnese.celular == undefined ? '' : this.anamnese.cpf;
    this.anamneseEnviar.sexo = this.anamnese.sexo == undefined ? '' : this.anamnese.celular;
    this.anamneseEnviar.idade = this.anamnese.idade == undefined ? '' : this.anamnese.idade;
    this.anamneseEnviar.tipo_sanguineo = this.anamnese.tipoSangue == undefined ? '' : this.anamnese.tipoSangue;
    this.anamneseEnviar.alergias = this.anamnese.alergias == undefined ? '' : this.anamnese.alergias;
    this.anamneseEnviar.medicacao_drogas = this.anamnese.medicacoesUsadas == undefined ? '' : this.anamnese.medicacoesUsadas;
    this.anamneseEnviar.historico_doencas = this.anamnese.historicoDoencas == undefined ? '' : this.anamnese.historicoDoencas;
    this.anamneseEnviar.queixa_principal = this.anamnese.sintomas == undefined ? '' : this.anamnese.sintomas;
    this.anamneseEnviar.nivel_dor = this.anamnese.nivelDor == undefined ? '' : this.anamnese.nivelDor;
    this.anamneseEnviar.classificacao_risco = this.anamnese.prioridade == undefined ? '' : this.anamnese.prioridade;
    this.anamneseEnviar.observacoes = this.anamnese.observacoes == undefined ? '' : this.anamnese.observacoes;
    this.anamneseEnviar.pressao_sanguinea = this.anamnese.pressao == undefined ? '' : this.anamnese.pressao;
    this.anamneseEnviar.oxigenacao = this.anamnese.oxigenacao == undefined ? '' : this.anamnese.oxigenacao;
    this.anamneseEnviar.temperatura = this.anamnese.temperatura == undefined ? '' : this.anamnese.temperatura;
    this.anamneseEnviar.frequencia_ritmica = this.anamnese.frequenciaRitmica == undefined ? '' : this.anamnese.frequenciaRitmica;
    this.anamneseEnviar.data = this.data;
    this.anamneseEnviar.hora = this.horas;
    this.anamneseEnviar.local = this.anamnese.localizacao == undefined ? '' : this.anamnese.cpf;
    this.anamneseEnviar.nome_paramedico_responsavel = this.anamnese.nomeParamedico == undefined ? '' : this.anamnese.nomeParamedico;
    this.anamneseEnviar.documento_trabalho_paramedico = this.anamnese.documento_trabalho == undefined ? '' : this.anamnese.documento_trabalho;
  }

  setAnamneseInfo() {
    this.dadosGeraisFormService.setAnamneseInfo(this.anamnese).subscribe(
      success => console.log('Sucesso!'),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  private verificaDados(dadosAtendimento: any) {
    let testResult: boolean = false;
    if(this.anamnese.localizacao == undefined || this.anamnese.localizacao == '') {
      alert('Insira a localização do paciente');
      throw new Error('Insira a localização do paciente');
    }
    else{
      testResult = true;
    }
    return testResult;
  }

  // getUserLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       alert('Location accessed')
  //     },function(){
  //       alert('User not allowed')
  //     },{timeout:10000});
  //   } else {
  //     console.log("User not allow")
  //   }
  // }
}
