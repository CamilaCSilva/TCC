import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  string = 'Perfil'

  usuario = {
    nome: 'Isabela Eduarda Pereira',
    funcao: 'Equipe Medica',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  }

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    alert('Informações salvas')
  }

}
