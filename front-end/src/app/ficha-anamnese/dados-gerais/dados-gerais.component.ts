import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.scss']
})
export class DadosGeraisComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  path2: string = 'home';
  nomeParamedico: string;
  documento_trabalho: string;
  data: Date;
  hora: String;
  anamnese: any;
  num: Int16Array
  alertMessage: string = "";
  localizacao: string = 'My House on Broadway Street apt 6';
  usuario:any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.nomeParamedico = this.anamnese?.paciente?.nomeParamedico;
    this.documento_trabalho = this.anamnese?.paciente?.documento_trabalho;
    this.localizacao = this.anamnese?.paciente?.local;
    const year = this.anamnese?.paciente?.data.slice(0, 4) * 1;
    const month = this.anamnese?.paciente?.data.slice(5, 7);
    const day = this.anamnese?.paciente?.data.slice(8) * 1;
    const hora = this.anamnese?.paciente?.hora.slice(0, 2);
    const min = this.anamnese?.paciente?.hora.slice(3, 5);
    const seg = this.anamnese?.paciente?.hora.slice(6);
    const data_atendimento = `${year}-${month}-${day}T${hora}:${min}:${seg}`;
    this.data = new Date(data_atendimento);
    if(this.alertMessage != "") {
      alert(this.alertMessage);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  alert() {
    alert('Dados incompletos');
  }

  fechar() {
    this.router.navigateByUrl(this.path2, this.usuario);
  }

  getuser(){
    this.usuario = {
      nome: this.anamnese.nome,
      cpfUsuario: this.anamnese.cpfUsuario,
      documento_trabalho: this.anamnese.documento_trabalho,
      tokem: this.anamnese.tokem,
      cpfPaciente: '',
    }
  }
}
