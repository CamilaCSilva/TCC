import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  path: string = 'perfil';
  string = 'Edição Perfil';

  usuario = {
    nome: 'Isabela',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  salvar(){
    this.router.navigateByUrl(this.path);
  }

}
