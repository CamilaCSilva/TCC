import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario = {
    nome: 'Isabela Eduarda Pereira',
    funcao: 'Equipe Medica',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  }

  paciente = {
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
    prioridade: 'Uregente',
    observacao: 'O paciente não consegue ficar em pé'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
