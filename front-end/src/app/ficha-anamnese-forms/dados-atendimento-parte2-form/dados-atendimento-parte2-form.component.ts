import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-parte2-form',
  templateUrl: './dados-atendimento-parte2-form.component.html',
  styleUrls: ['./dados-atendimento-parte2-form.component.scss']
})
export class DadosAtendimentoParte2FormComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form';
  sintomas: string;
  nivelDor: number;
  prioridade: string = 'nao-urgente';
  observacoes: string;
  anamnese: any;
  bVoltar: boolean = false;
  bSeguir: boolean = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
   }

  ngOnInit(): void {
    if(this.anamnese.nomeCompleto != ''){
      this.sintomas = this.anamnese.sintomas;
      this.nivelDor = this.anamnese.nivelDor;
      this.prioridade = this.anamnese.prioridade;
      this.observacoes = this.anamnese.observacoes;
    }
  }

  onSubmit(dadosAtendimentoParte2: any){
    this.criarAnamnese(dadosAtendimentoParte2);
    if(this.bSeguir == true){
      if(this.verificaDados(this.anamnese)){
        this.router.navigateByUrl(this.path2, this.anamnese);
      }
    }
    else if(this.bVoltar == true){
      this.router.navigateByUrl(this.path1, this.anamnese);
    }
  }

  botaoVoltar(){
    this.bVoltar = true;
    this.bSeguir = false;
  }
  botaoSeguir(){
    this.bSeguir = true;
    this.bVoltar = false;
  }

  private criarAnamnese(dadosAtendimento: any){
    this.anamnese = Object.assign({}, this.anamnese, dadosAtendimento.value);
  }

  private verificaDados(dadosAtendimento: any) {
    let testResult: boolean = false;
    if(this.anamnese.sintomas == undefined) {
      alert('Insira os sintomas');
      throw new Error('Insira os sintomas');
    }
    else if(this.anamnese.nivelDor == undefined || this.anamnese.nivelDor == ''){
      alert('Insira o nivel de dor do paciente');
      throw new Error('Insira o nivel de dor do paciente');

    }
    else if(this.anamnese.prioridade == undefined || this.anamnese.prioridade == ''){
      alert('Insira a prioridade do paciente');
      throw new Error('Insira a prioridade do paciente');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

  onPrioridadeChange(prioridade: string) {
    if(prioridade == 'nao-urgente') { console.log('Não urgente'); }
    else if(prioridade == 'pouco-urgente') { console.log('Pouco urgente'); }
    else if(prioridade == 'urgente') { console.log('Urgente'); }
    else if(prioridade == 'emergencia') { console.log('Emergência'); }
  }

  getPrioridade(event: Event) {
    this.prioridade = (event.target as HTMLInputElement).value;
    return this.prioridade;
  }
}
