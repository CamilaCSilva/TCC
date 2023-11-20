import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anamnese } from 'src/app/models/anamnese.model';
import { FichaAnamneseService } from '../ficha-anamnese-forms.service';

@Component({
  selector: 'app-dados-vitais-paciente-form',
  templateUrl: './dados-vitais-paciente-form.component.html',
  styleUrls: ['./dados-vitais-paciente-form.component.scss']
})
export class DadosVitaisPacienteFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form';
  pressao: String;
  oxigenacao: String;
  temperatura: String;
  frequenciaRitmica: String;
  anamnese: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;
  ficha: Anamnese;

  constructor(private router: Router, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
   }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente')
    if(this.ficha.pressao_sanguinea != '' && this.ficha.pressao_sanguinea != undefined){
      this.pressao = this.ficha.pressao_sanguinea;
      this.oxigenacao = this.ficha.oxigenacao;
      this.temperatura = this.ficha.temperatura;
      this.frequenciaRitmica = this.ficha.frequencia_cardiaca;
    }
  }

  onSubmit(dadosAtendimentoParte2: any){
    this.criarAnamnese(dadosAtendimentoParte2);
    if(this.bSeguir == true){
      if(this.verificaDados()){
        this.router.navigateByUrl(this.path2, this.anamnese);
      }
    }
    else if(this.bVoltar == true){
      this.router.navigateByUrl(this.path1, this.anamnese);
    }
  }

  voltar(){
    this.bVoltar = true;
    this.bSeguir = false;
  }

  seguir() {
    this.bSeguir = true;
    this.bVoltar = false;
  }

  private criarAnamnese(dadosAtendimento: any){
    this.ficha.pressao_sanguinea = dadosAtendimento.value.pressao
    this.ficha.oxigenacao = dadosAtendimento.value.oxigenacao
    this.ficha.temperatura = dadosAtendimento.value.temperatura
    this.ficha.frequencia_cardiaca = dadosAtendimento.value.frequenciaRitmica
    this.fichaFormsService.set('paciente', this.ficha)
    }

  private verificaDados() {
    let testResult: boolean = false;
    if(this.ficha.pressao_sanguinea == undefined || this.ficha.pressao_sanguinea == '') {
      alert('Insira a pressão do paciente');
      throw new Error('Insira a pressão do paciente');
    }
    else if(this.ficha.oxigenacao == undefined || this.ficha.oxigenacao == ''){
      alert('Insira a oxigenação do paciente');
      throw new Error('Insira a oxigenação do paciente');

    }
    else if(this.ficha.temperatura == undefined || this.ficha.temperatura == ''){
      alert('Insira a temperatura do paciente');
      throw new Error('Insira a temperatura do paciente');
    }
    else if(this.ficha.frequencia_cardiaca == undefined || this.ficha.frequencia_cardiaca == ''){
      alert('Insira a frequência ritmica do paciente');
      throw new Error('Insira a frequência ritmica do paciente');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
