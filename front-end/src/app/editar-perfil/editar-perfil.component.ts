import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilInfo } from '../models/perfil.model';
import { Notification } from '../shared/shared.model';
import { EditarPerfilService } from './editar-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  path1: string = '/home';
  path2: string = '/login';
  path3: string = 'home/perfil';

  string = 'Edição Perfil';
  perfil: PerfilInfo;
  password = '';
  nome: string;

  usuario: any = {
    nome_completo: '',
    cpf: '',
    documento_trabalho: '',
    area_atuacao: '',
    celular: '',
    campo_escolha:'',
    unidade_de_atendimento: '',
  }

  perfil_atualizado: any = {
    nome_completo: '',
    cpf: '',
    documento_trabalho: '',
    area_atuacao: '',
    celular: '',
    campo_escolha:'',
    unidade_de_atendimento: '',
    password: '',
  }

  // notificacao: NotificationComponent;
  notificacao: Notification = {
   mensagem: '',
   classe: '',
   validacao: false
  }

  constructor(private router: Router, private editarPerfilService: EditarPerfilService) {}

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
    this.nome = this.perfil.nome_completo;
    this.usuario.nome_completo = this.perfil.nome_completo;
    this.usuario.campo_escolha = this.perfil.campo_escolha;
    this.usuario.documento_trabalho = this.perfil.documento_trabalho;
    this.usuario.cpf = this.perfil.cpf.slice(0,3) + "." + this.perfil.cpf.slice(3,6)+ "." + this.perfil.cpf.slice(6,9) + "-" + this.perfil.cpf.slice(9);
    this.usuario.unidade_de_atendimento = this.perfil.unidade_de_atendimento;
    this.usuario.celular = "(" + this.perfil.celular.slice(0, 2) + ") " + this.perfil.celular.slice(2,7) + "-" + this.perfil.celular.slice(7);
  }

  home(){
    this.router.navigateByUrl(this.path1);
  }

  voltar(){
    this.router.navigateByUrl(this.path3);
  }

  salvar() {
    this.perfil_atualizado.campo_escolha = this.usuario.campo_escolha != '' ? this.usuario.campo_escolha : this.perfil_atualizado.campo_escolha;
    console.log(this.perfil_atualizado.campo_escolha)
    this.perfil_atualizado.nome_completo = this.usuario.nome_completo != '' ? this.usuario.nome_completo : this.perfil_atualizado.nome_completo;
    this.perfil_atualizado.celular = this.usuario.celular != '' ? this.usuario.celular : this.perfil_atualizado.celular;
    this.perfil_atualizado.documento_trabalho = this.usuario.documento_trabalho != '' ? this.usuario.documento_trabalho : this.perfil_atualizado.documento_trabalho;
    this.perfil_atualizado.unidade_de_atendimento = this.usuario.unidade_de_atendimento != '' ? this.usuario.unidade_de_atendimento : this.perfil_atualizado.unidade_de_atendimento;
    this.perfil_atualizado.cpf = this.usuario.cpf;
    if(this.verificaDadosPerfil(this.perfil_atualizado)){
      this.perfil_atualizado.cpf = this.usuario.cpf.replace(/-/g, "").replace(".", "").replace(".", "");
      this.perfil_atualizado.celular = this.usuario.celular.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.perfil_atualizado.password = this.password;
      console.log(this.perfil_atualizado.password)
      this.updateProfissional();
    }
  }

  logout(){
    this.editarPerfilService.getLogoutUser().subscribe(
      res => {
        this.router.navigateByUrl(this.path2);
      },
      error => {
        console.log(error);
        this.notificacao = { 
          mensagem: 'Erro ao deslogar', 
          classe: 'alert-danger', 
          validacao: true 
        };
        this.limparNotificacao();
      },
    );
  }

  updateProfissional(){
    this.editarPerfilService.updatePerfilInfo(this.perfil_atualizado).subscribe(
      success => {
        this.router.navigateByUrl(this.path3);
        this.notificacao = { 
          mensagem: 'Perfil atualizado com sucesso!', 
          classe: 'alert-success', 
          validacao: true 
        };
        this.limparNotificacao();
      },
      error => {
        console.log(error);
        this.notificacao = { 
          mensagem: 'Erro ao atualizar o perfil', 
          classe: 'alert-danger', 
          validacao: true 
        };
        this.limparNotificacao();
      },
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

  limparNotificacao() {
    setTimeout(() => {
      this.notificacao = {
        mensagem: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }

  private verificaDadosPerfil(dados: any) {
    let testResult: boolean = false;
    if(dados.nome_completo == '' || dados.nome_completo.length < 6 || dados.nome_completo.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      this.notificacao = {
        mensagem: 'Nome incompleto', 
        classe: 'alert-danger', 
        validacao: true 
      };
      this.limparNotificacao();
      throw new Error('Nome incompleto');
    }
    else if ( dados.campo_escolha == '' ) {
      this.notificacao = {
        mensagem: 'Escolha sua área de atuação',
        classe: 'alert-danger', 
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('Escolha sua área de atuação');
    }
    else if(dados.documento_trabalho == '') {
      this.notificacao = {
        mensagem: 'Preencha seu documento de trabalho',
        classe: 'alert-danger',
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('Preencha seu documento de trabalho');
    }
    else if(dados.unidade_de_atendimento == '') {
      this.notificacao = {
        mensagem: 'Preencha o campo de qual unidade você atua',
        classe: 'alert-danger',
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (dados.celular == '' || dados.celular.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/) == null) {
      this.notificacao = {
        mensagem: 'Celular no formato inesperado', 
        classe: 'alert-danger', 
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('Celular incorreto');
    }
    else {
      testResult = true;
    }
    return testResult;
  }
}
