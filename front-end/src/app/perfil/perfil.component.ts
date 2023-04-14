import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  path: string = 'perfil/editar-perfil';

  string = 'Perfil'

  usuario: any = {
    nome: 'Isabela Eduarda Pereira',
    sexo: 'F',
    funcao: 'Equipe Medica',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editar(){
    this.router.navigateByUrl(this.path);
  }


}
