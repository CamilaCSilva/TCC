import { Component, OnInit } from '@angular/core';
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
  data = this.date.getFullYear() + '-' + String(this.date.getMonth()+1).padStart(2, '0') + '-' + String(this.date.getDate()).padStart(2, '0');
  horas = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
  localizacao: string;
  anamnese: any;
  anamneseEnviar: any;
  usuario: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  alertMessage: string = "";

  constructor(private router: Router, private dadosGeraisFormService: DadosGeraisFormService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.nomeParamedico = this.anamnese.nome;
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
      this.anamnese.data = this.data;
      this.anamnese.hora = this.horas;
      this.coverteParaAnamnese();
      this.setAnamneseInfo()
      this.getuser();
    }
  }

  private criarAnamnese(dadosAtendimento: any){
    this.anamnese = Object.assign({}, this.anamnese, dadosAtendimento.value);
  }

  private coverteParaAnamnese(){
    this.anamneseEnviar = {
      cpf: this.anamnese.nomeCompleto == undefined ? 'N/A' : this.anamnese.cpf,
      nome_completo: this.anamnese.nomeCompleto == undefined ? 'N/A' : this.anamnese.nomeCompleto,
      celular: this.anamnese.celular == undefined ? 'N/A' : this.anamnese.celular,
      sexo: this.anamnese.sexo == undefined ? 'N/A' : this.anamnese.sexo,
      idade: this.anamnese.idade == undefined ? 'N/A' : this.anamnese.idade,
      tipo_sanguineo: this.anamnese.tipoSangue == undefined ? 'N/A' : this.anamnese.tipoSangue,
      alergias: this.anamnese.alergias == undefined ? 'N/A' : this.anamnese.alergias,
      medicacao_drogas: this.anamnese.medicacoesUsadas == undefined ? 'N/A' : this.anamnese.medicacoesUsadas,
      historico_doencas: this.anamnese.historicoDoencas == undefined ? 'N/A' : this.anamnese.historicoDoencas,
      queixa_principal: this.anamnese.sintomas == undefined ? 'N/A' : this.anamnese.sintomas,
      nivel_dor: this.anamnese.nivelDor == undefined ? 'N/A' : this.anamnese.nivelDor,
      classificacao_risco: this.anamnese.prioridade == undefined ? 'N/A' : this.anamnese.prioridade,
      observacoes: this.anamnese.observacoes == undefined ? 'N/A' : this.anamnese.observacoes,
      pressao_sanguinea: this.anamnese.pressao == undefined ? 'N/A' : this.anamnese.pressao,
      oxigenacao: this.anamnese.oxigenacao == undefined ? 'N/A' : this.anamnese.oxigenacao,
      temperatura: this.anamnese.temperatura == undefined ? 'N/A' : this.anamnese.temperatura,
      frequencia_ritmica: this.anamnese.frequenciaRitmica == undefined ? 'N/A' : this.anamnese.frequenciaRitmica,
      data: this.data,
      hora: this.horas,
      local: this.anamnese.localizacao == undefined ? 'N/A' : this.anamnese.localizacao,
      nome_paramedico_responsavel: this.anamnese.nome == undefined ? 'N/A' : this.anamnese.nome,
      documento_trabalho_paramedico: this.anamnese.documento_trabalho == undefined ? 'N/A' : this.anamnese.documento_trabalho,
    }
  }

  private setAnamneseInfo() {
    this.dadosGeraisFormService.setAnamneseInfo(this.anamneseEnviar).subscribe(
      success => this.router.navigateByUrl(this.path2, this.usuario),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  private verificaDados(dadosAtendimento: any) {
    let testResult: boolean = false;
    console.log(dadosAtendimento.localizacao)
    if(dadosAtendimento.localizacao == undefined || dadosAtendimento.localizacao == '') {
      alert('Insira a localização do paciente');
      throw new Error('Insira a localização do paciente');
    }
    else{
      testResult = true;
    }
    return testResult;
  }

  private getuser(){
    this.usuario = {
      nome: this.anamnese.nome,
      cpfUsuario: this.anamnese.cpfUsuario,
      documento_trabalho: this.anamnese.documento_trabalho,
      tokem: this.anamnese.tokem,
      cpfPaciente: '',
    }
  }
}
