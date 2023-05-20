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
  data: String;
  hora: String;
  anamnese: any;
  num: Int16Array
  alertMessage: string = "";
  localizacao: string;
  usuario:any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    console.log(this.anamnese.data.slice(0, 2))
    this.nomeParamedico = this.anamnese.nome_paramedico_responsavel;
    this.documento_trabalho = this.anamnese.documento_trabalho_paramedico;
    this.localizacao = this.anamnese.localizacao;
    this.data = this.anamnese.data
    this.hora = this.anamnese.hora
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
