import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-vitais-paciente-form',
  templateUrl: './dados-vitais-paciente-form.component.html',
  styleUrls: ['./dados-vitais-paciente-form.component.scss']
})
export class DadosVitaisPacienteFormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form';
  pressao: number;
  oxigenacao: number;
  temperatura: number;
  frequenciaRitmica: number;
  anamnese: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
   }

  ngOnInit(): void {
    if(this.anamnese?.paciente?.nome_completo != '') {
      this.pressao = this.anamnese?.paciente?.pressao_sanguinea;
      this.oxigenacao = this.anamnese?.paciente?.oxigenacao;
      this.temperatura = this.anamnese?.paciente?.temperatura;
      this.frequenciaRitmica = this.anamnese?.paciente?.frequencia_cardiaca;
    }
  }

  onSubmit(dadosAtendimentoParte2: any){
    this.criarAnamnese(dadosAtendimentoParte2);
    if(this.bSeguir == true){
      if(this.verificaDados()) {
        this.router.navigateByUrl(this.path2, this.anamnese);
      }
    }
    else if(this.bVoltar == true) {
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
    this.anamnese = Object.assign({}, this.anamnese, dadosAtendimento.value);
  }

  private verificaDados() {
    let testResult: boolean = false;
    if(this.anamnese.pressao == undefined || this.anamnese.pressao == '') {
      alert('Insira a pressão do paciente');
      throw new Error('Insira a pressão do paciente');
    }
    else if(this.anamnese.oxigenacao == undefined || this.anamnese.oxigenacao == ''){
      alert('Insira a oxigenação do paciente');
      throw new Error('Insira a oxigenação do paciente');

    }
    else if(this.anamnese.temperatura == undefined || this.anamnese.temperatura == ''){
      alert('Insira a temperatura do paciente');
      throw new Error('Insira a temperatura do paciente');
    }
    else if(this.anamnese.frequenciaRitmica == undefined || this.anamnese.frequenciaRitmica == ''){
      alert('Insira a frequência ritmica do paciente');
      throw new Error('Insira a frequência ritmica do paciente');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
