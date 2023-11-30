import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';
import { PerfilInfo } from '../models/perfil.model';
import { NotificationComponent } from '../shared/notification/notification.component';
import { Notification } from '../shared/shared.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  path1: string = '/home';
  path2: string = '/login';
  path3: string = 'home/perfil/editar-perfil';

  string = 'Perfil';
  perfil: PerfilInfo;
  nome_completo:String;
  campo_escolha: String;
  documento_trabalho: String;
  cpf: String = '';
  unidade_de_atendimento: String;
  celular: String;

  usuario: any;
  nome = 'Alessandra';

  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private perfilService: PerfilService) {
    const nav = this.router.getCurrentNavigation();
    this.usuario = nav?.extras;
  }

  ngOnInit() {
    this.listarProfissional();
  }

  logout(){
    this.perfilService.getLogoutUser().subscribe(
      res => {
        this.router.navigateByUrl(this.path2);
      }, err => {
        console.log(err);
        this.notificacao = {
          mensagem: 'Erro ao deslogar', 
          classe: 'alert-danger', 
          validacao: true
        };
        this.limparNotificacao();
      }
    );
  }

  listarProfissional() {
    this.perfilService.getPerfilInfo().subscribe(perfilInfo => {
      this.perfil = perfilInfo;
      if(this.perfil?.campo_escolha == 'CRM') { this.perfil.campo_escolha = 'Médico(a)'; }
      else if(this.perfil?.campo_escolha == 'COREN') { this.perfil.campo_escolha = 'Enfermeiro(a)'; }
      else if(this.perfil?.campo_escolha == 'DRF') { this.perfil.campo_escolha = 'Paramédico(a)'; }
      this.mostrarProfissional();
    }, err => {
      console.log('Erro ao listar o profissional', err);
      this.notificacao = {
        mensagem: 'Erro ao listar o profissional', 
        classe: 'alert-danger', 
        validacao: true
      };
      this.limparNotificacao();
    })
  }

  mostrarProfissional() {
    this.nome_completo = this.perfil.nome_completo;
    this.campo_escolha = this.perfil.campo_escolha;
    this.documento_trabalho = this.perfil.documento_trabalho;
    this.cpf = this.perfil.cpf.slice(0,3) + "." + this.perfil.cpf.slice(3,6)+ "." + this.perfil.cpf.slice(6,9) + "-" + this.perfil.cpf.slice(9);
    this.unidade_de_atendimento = this.perfil.unidade_de_atendimento;
    this.celular = "(" + this.perfil.celular.slice(0, 2) + ") " + this.perfil.celular.slice(2,7) + "-" + this.perfil.celular.slice(7);
  }

  home() {
    this.router.navigateByUrl(this.path1);
  }

  editar() {
    this.router.navigateByUrl(this.path3);
  }

  deletarUser(cpf: String) {
    this.perfilService.deleteUser(cpf).subscribe(
      success => {
        console.log('Deletou!');
        this.fecharDialog();
        this.notificacao = {
          mensagem: 'Usuário deletado com sucesso!', 
          classe: 'alert-success', 
          validacao: true
        };
        this.limparNotificacao();
        setTimeout(() => {
          this.router.navigateByUrl(this.path2);
        }, 2000);
      },
      error => {
        console.log(error);
        this.fecharDialog();
        this.notificacao = {
          mensagem: 'Erro ao tentar deletar usuário', 
          classe: 'alert-danger', 
          validacao: true
        };
        this.limparNotificacao();
      }
    );
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

  fecharDialog(): boolean {
    return true;
  }
}
