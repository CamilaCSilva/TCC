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
    if(this.verificaDadosPerfil(this.perfil_atualizado)){
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

  private verificaDadosPerfil(cadastro: PerfilInfo) {
    let testResult: boolean = false;
    if(cadastro.nome_completo == '' || cadastro.nome_completo.length < 6 || cadastro.nome_completo.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if ( cadastro.campo_escolha == '' ){
      alert('Escolha sua área de atuação');
      throw new Error('Escolha sua área de atuação');
    }
    else if(cadastro.documento_trabalho == ''){
      alert('Preencha seu documento de trabalho');
      throw new Error('Preencha seu documento de trabalho');
    }
    else if (cadastro.cpf == '' || cadastro.cpf.length < 11 || !cadastro.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(cadastro.unidade_de_atendimento == ''){
      alert('Preencha o campo de qual unidade você atua');
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (cadastro.celular == '' || cadastro.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (cadastro.senha == '' || !cadastro.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }
    return testResult
  }

}
