import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilInfo } from '../models/perfil.model';
import { EditarPerfilService } from './editar-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  path: string = 'perfil';
  string = 'Edição Perfil';
  nomeCompleto: string;
  areaAtuacao: string = 'medico';
  crmCorenDrf: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string
  testResult: boolean = false;
  perfil: PerfilInfo;
  perfil_atualizado: any;

  usuario = {
    nome: 'Isabela',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '78965412320',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  };

  constructor(private router: Router, private editarPerfilService: EditarPerfilService) { }

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
    this.updateProfissional();
    this.router.navigateByUrl(this.path);
  }

  updateProfissional(){
    this.editarPerfilService.updatePerfilInfo(this.usuario.cpf, this.perfil_atualizado).subscribe(
      success => console.log('Sucesso!'),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'medico') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'enfermeiro') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'paramedico') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

  private verificaDados() {
    if(this.nomeCompleto && this.nomeCompleto.length < 6) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if (this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if (this.celular && this.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else {
      this.testResult = true;
    }
  }
}
