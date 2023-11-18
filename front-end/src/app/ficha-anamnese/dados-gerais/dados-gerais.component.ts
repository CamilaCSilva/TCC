import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { FichaAnamneseService } from '../ficha-anamnese.service';
import { Anamnese } from 'src/app/models/anamnese.model';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.scss']
})
export class DadosGeraisComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  path2: string = 'home';
  nomeParamedico: String;
  documento_trabalho: String;
  data: Date;
  hora: String;
  anamnese: any;
  num: Int16Array
  alertMessage: String = "";
  localizacao: String = 'My House on Broadway Street apt 6';
  usuario:any;
  nome: string;
  ficha: Anamnese;

  constructor(private router: Router, private homeService: HomeService, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.ficha = this.fichaAnamneseService.get('ficha')
    this.nomeParamedico =  this.ficha.nome_paramedico_responsavel;
    this.documento_trabalho =  this.ficha.documento_trabalho_paramedico;
    this.localizacao =  this.ficha.local;
    const data_atendimento_aux = this.ficha.data.toString()
    const ano = data_atendimento_aux.slice(0, 4);
    const mes = data_atendimento_aux.slice(5, 7);
    const dia = data_atendimento_aux.slice(8);
    const hora = this.ficha.hora.slice(0, 2);
    const min = this.ficha.hora.slice(3, 5);
    const seg = this.ficha.hora.slice(6);
    const data_atendimento = `${ano}-${mes}-${dia}T${hora}:${min}:${seg}`;
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
    this.fichaAnamneseService.delete('ficha')
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
