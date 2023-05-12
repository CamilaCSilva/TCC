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
  date: Date = new Date();
  alertMessage: string = "";
  localizacao: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(this.alertMessage != "") {
      alert(this.alertMessage);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

  alert() {
    alert('Dados incompletos');
  }

  fechar() {
    this.router.navigateByUrl(this.path2);
  }
}
