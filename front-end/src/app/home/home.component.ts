import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario = {
    nome: 'Isabela Eduarda Pereira',
    funcao: 'Equipe Medica',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  }

  paciente = [
    {
      nome: 'Lucas Santos',
      cpf: '987.234.567-45',
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
      observacao: 'O paciente não consegue ficar em pé'
    },
    {
      nome: 'Margaret Tate',
      cpf: '727.254.687-35',
      celular: '(22)99253-4568',
      idade: 23,
      tipo_sanguineo: 'A-',
      sexo: 'F',
      alegias: 'Nozes',
      medicacoes_utilizadas: ['Loratadina'],
      historico_doencas: [ 'Nenhuma'],
      sintomas: ['Nausea', 'Tontura', 'Febre'],
      nivel_dor: 6,
      prioridade: 'Pouco Uregente',
      observacao: 'O paciente está com tontura'
    },
    {
      nome: 'Bernardo Silva',
      cpf: '127.274.697-75',
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
      observacao: 'O paciente está com tontura e não consegue ficar com os olhps abertos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
