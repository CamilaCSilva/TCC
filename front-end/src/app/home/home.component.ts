import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fichas') fichasElement: ElementRef;

  pacientes = [
    {
      nome: 'Lucas Santos',
      cpf: '98723456714',
      celular: '(35)99123-4567',
      idade: 25,
      tipo_sanguineo: 'O-',
      sexo: 'M',
      alegias: ['Polém', 'Aspirina'],
      medicacoes_utilizadas: ['Ibuprofeno'],
      historico_doencas: [ 'Fibromialgia'],
      sintomas: ['Dor no estomago', 'Mal estar', 'Desmaios'],
      nivel_dor: 8,
      prioridade: 'Urgente',
      observacao: 'O paciente não consegue ficar em pé',
      data: '2020-03-22'
    },
    {
      nome: 'Margaret Tate',
      cpf: '12345678910',
      celular: '(22)99253-4568',
      idade: 23,
      tipo_sanguineo: 'A-',
      sexo: 'F',
      alegias: 'Nozes',
      medicacoes_utilizadas: ['Loratadina'],
      historico_doencas: [ 'Nenhuma'],
      sintomas: ['Nausea', 'Tontura', 'Febre'],
      nivel_dor: 6,
      prioridade: 'Pouco Urgente',
      observacao: 'O paciente está com tontura',
      data: '2021-04-22'
    },
    {
      nome: 'Sandro',
      cpf: '98723456724',
      celular: '(13)99257-9567',
      idade: 35,
      tipo_sanguineo: 'AB+',
      sexo: 'M',
      alegias: 'Camarão',
      medicacoes_utilizadas: ['Nenhuma'],
      historico_doencas: [ 'Nenhuma'],
      sintomas: ['Enxaqueca', 'Tontura', 'Mal estar'],
      nivel_dor: 7,
      prioridade: 'Pouco Urgente',
      observacao: 'O paciente está com tontura e não consegue ficar com os olhos abertos',
      data: '2020-03-08'
    },
    // {
    //   nome: 'Mariana Dias',
    //   cpf: '127.274.497-75',
    //   celular: '(14)98227-9567',
    //   idade: 15,
    //   tipo_sanguineo: 'O+',
    //   sexo: 'F',
    //   alegias: 'Leite',
    //   medicacoes_utilizadas: ['Nenhuma'],
    //   historico_doencas: [ 'Nenhuma'],
    //   sintomas: ['Falta de ar', 'Garganta Fechada'],
    //   nivel_dor: 8,
    //   prioridade: 'Urgente',
    //   observacao: 'A paciente não consegue respirar',
    //   data: '2020-03-21'
    // }
  ]

  usuario: any = {
    nome: 'Isabela',
    cpfUsuario: '12345678910',
    documento_trabalho: '78965',
    tokem: '',
    cpfPaciente: '',
  }

  data: Date;
  tipo: boolean;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    // this.usuario = nav?.extras;
  }

  ngOnInit(): void {
    console.log(this.usuario)
  }

  filtrarPorData(data: Date) {
    if(data) {
      this.pacientes = this.pacientes.filter(a => a.data == data.toString());
    } else {
      return;
    }
  }

  visualizarFicha(cpf: any) {
    this.usuario.cpfPaciente = cpf;
    console.log(this.usuario)
    this.router.navigateByUrl('/home/fichas', this.usuario);
  }

  adicionarFicha() {
    this.router.navigateByUrl('/home/formularios', this.usuario);
  }

}
