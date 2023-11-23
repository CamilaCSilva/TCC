import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';
import { PerfilInfo } from '../models/perfil.model';

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

  notificacao: any = {
    texto: '',
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
      this.mostrarNotificacao('Erro ao listar o profissional', 'alert-danger', true);
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
        this.mostrarNotificacao('Usuário deletado com sucesso!', 'alert-success', true);
        this.router.navigateByUrl(this.path2);
      },
      error => {
        console.log(error);
        this.fecharDialog();
        this.mostrarNotificacao('Erro ao tentar deletar usuário', 'alert-danger', true);
      }
    );
  }

  mostrarNotificacao(texto: string, classe: string, validacao: boolean) {
    this.notificacao = {
      texto: texto,
      classe: classe,
      validacao: validacao
    };
    this.limparNotificacao();
  }

  limparNotificacao() {
    setTimeout(() => {
      this.notificacao = {
        texto: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }

  fecharDialog(): boolean {
    return true;
  }
}
