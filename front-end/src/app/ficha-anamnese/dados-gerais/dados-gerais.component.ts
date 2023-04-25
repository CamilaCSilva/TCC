import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.scss']
})
export class DadosGeraisComponent implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  path2: string = 'home';
  nomeParamedico: string;
  crmCorenDrf: string;
  date: Date = new Date();
  alertMessage: string = "";

  constructor(private router: Router) {}

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

  enviar() {
    this.router.navigateByUrl(this.path2);
  }

}
