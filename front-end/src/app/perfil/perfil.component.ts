import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';
import { PerfilInfoExistente, PerfilInfoExistenteArray } from './perfil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  path: string = 'perfil/editar-perfil';
  string = 'Perfil';
  nomeCompleto: string;
  areaAtuacao: string = 'medico';
  documento_trabalho: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string
  testResult: boolean = false;
  perfilInfoExistente: PerfilInfoExistenteArray;

  usuario: any = {
    nome: 'Isabela',
    sexo: 'F',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  };

  constructor(private router: Router, private perfilService: PerfilService) { }

  ngOnInit(): void {
    // this.perfilInfoExistente = this.perfilService.getPerfilInfo();
    // if(this.perfilInfoExistente) {
    //   this.perfilInfoExistente.map((data) => {
    //     this.nomeCompleto = data.nomeCompleto;
    //     this.areaAtuacao = data.campo_escolha;
    //     this.crmCorenDrf = data.documentoTrabalho;
    //     this.cpf = data.cpf;
    //     this.unidadeAtendimento = data.unidadeDeAtendimento;
    //     this.celular = data.telefone;
    //   });
    // }
  }

  editar(){
    this.router.navigateByUrl(this.path);
  }


}
