import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilInfo } from '../models/perfil.model';
import { EditarPerfilService } from './editar-perfil.service';
import { Validacao } from '../models/validacao.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  path: string = 'perfil';
  string = 'Edição Perfil';
  areaAtuacao: string;
  perfil: PerfilInfo;
  perfil_atualizado: any;

  usuario = {
    nome: 'Isabela',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '22222222228',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  };

  constructor(private router: Router, private editarPerfilService: EditarPerfilService, private validacao: Validacao) { }

  ngOnInit(): void {
    this.listarProfissional();
  }

  listarProfissional(){
    this.editarPerfilService.getPerfilInfo(this.usuario.cpf).subscribe(perfilInfo => {
      this.perfil = perfilInfo;
    }, err => {
      console.log('Erro ao listar o profissional', err)
    })
  }

  voltar(){
    this.router.navigateByUrl(this.path);
  }

  salvar(editarPerfil: any) {
    this.perfil_atualizado = this.perfil;
    this.perfil_atualizado.campo_escolha = editarPerfil.value.campo_escolha != '' ? editarPerfil.value.campo_escolha : this.perfil_atualizado.campo_escolha;
    this.perfil_atualizado.nome_completo = editarPerfil.value.nome_completo != '' ? editarPerfil.value.nome_completo : this.perfil_atualizado.nome_completo;
    this.perfil_atualizado.celular = editarPerfil.value.celular != '' ? editarPerfil.value.celular : this.perfil_atualizado.celular;
    this.perfil_atualizado.documento_trabalho = editarPerfil.value.documento_trabalho != '' ? editarPerfil.value.documento_trabalho : this.perfil_atualizado.documento_trabalho;
    this.perfil_atualizado.unidade_de_atendimento = editarPerfil.value.unidade_de_atendimento != '' ? editarPerfil.value.unidade_de_atendimento : this.perfil_atualizado.unidade_de_atendimento;
    if(this.validacao.verificaDadosPerfil(this.perfil_atualizado)){
      this.updateProfissional();
      this.router.navigateByUrl(this.path);
    }
  }

  updateProfissional(){
    this.editarPerfilService.updatePerfilInfo(this.usuario.cpf, this.perfil_atualizado).subscribe(
      success => console.log('Sucesso!'),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'CRM') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'COREN') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'DRF') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

}
