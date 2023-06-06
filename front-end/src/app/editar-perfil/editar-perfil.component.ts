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

  path: string = 'home/perfil';
  string = 'Edição Perfil';
  perfil: PerfilInfo;
  perfil_atualizado: PerfilInfo;

  usuario: any = {
    nome_completo: '',
    cpf: '',
    documento_trabalho: '',
    area_atuacao: '',
    celular: '',
    campo_escolha:'',
    unidade_de_atendimento: '',
  }

  constructor(private router: Router, private editarPerfilService: EditarPerfilService) {
    
  }

  ngOnInit(): void {
    this.listarProfissional();
  }

  listarProfissional(){
    this.editarPerfilService.getPerfilInfo().subscribe(perfilInfo => {
      this.perfil = perfilInfo;
      this.mostrarProfissional();
    }, err => {
      console.log('Erro ao listar o profissional', err)
    })
  }

  mostrarProfissional(){
    this.usuario.nome_completo = this.perfil.nome_completo;
    this.usuario.campo_escolha = this.perfil.campo_escolha;
    this.usuario.documento_trabalho = this.perfil.documento_trabalho;
    this.usuario.cpf = this.perfil.cpf.slice(0,3) + "." + this.perfil.cpf.slice(3,6)+ "." + this.perfil.cpf.slice(6,9) + "-" + this.perfil.cpf.slice(9);
    this.usuario.unidade_de_atendimento = this.perfil.unidade_de_atendimento;
    this.usuario.celular = "(" + this.perfil.celular.slice(0, 2) + ") " + this.perfil.celular.slice(2,7) + "-" + this.perfil.celular.slice(7);
  }

  voltar(){
    this.router.navigateByUrl(this.path,);
  }

  home(){
    this.router.navigateByUrl('/home');
  }

  salvar() {
    this.perfil_atualizado.campo_escolha = this.usuario.campo_escolha != '' ? this.usuario.campo_escolha : this.perfil_atualizado.campo_escolha;
    this.perfil_atualizado.nome_completo = this.usuario.nome_completo != '' ? this.usuario.nome_completo : this.perfil_atualizado.nome_completo;
    this.perfil_atualizado.celular = this.usuario.celular != '' ? this.usuario.celular : this.perfil_atualizado.celular;
    this.perfil_atualizado.documento_trabalho = this.usuario.documento_trabalho != '' ? this.usuario.documento_trabalho : this.perfil_atualizado.documento_trabalho;
    this.perfil_atualizado.unidade_de_atendimento = this.usuario.unidade_de_atendimento != '' ? this.usuario.unidade_de_atendimento : this.perfil_atualizado.unidade_de_atendimento;
    if(this.verificaDadosPerfil(this.perfil_atualizado)){
      this.perfil_atualizado.cpf = this.usuario.cpf.replace(/-/g, "").replace(".", "").replace(".", "");
      this.perfil_atualizado.celular = this.usuario.celular.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.updateProfissional();
    }
  }

  logout(){
    this.editarPerfilService.getLogoutUser().subscribe(
      res => {
        this.router.navigateByUrl(this.path);
      }
    );
  }

  updateProfissional(){
    this.editarPerfilService.updatePerfilInfo(this.perfil_atualizado).subscribe(
      success => this.router.navigateByUrl(this.path),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(area_atuacao: string) {
    if(area_atuacao == 'CRM') { console.log('Médico(a)'); }
    else if(area_atuacao == 'COREN') { console.log('Enfermeiro(a)'); }
    else if(area_atuacao == 'DRF') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.usuario.area_atuacao = (event.target as HTMLInputElement).value;
    return this.usuario.area_atuacao;
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
    else if (cadastro.cpf == '' || !cadastro.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
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
    else if (cadastro.password == '' || !cadastro.password.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }
    return testResult
  }

}
