import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginInfo } from '../models/login.model';
import { Notification } from '../shared/shared.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensagem(mensagem: any) {
    throw new Error('Method not implemented.');
  }
  entrar(name: string) {
    throw new Error('Method not implemented.');
  }

  path = '/home';
  stringFacaLogin = 'Faça o login!';
  cpf_usuario: string = '';
  password: string = '';
  usuario: any;
  perfil: LoginInfo;

  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {}

  logar() {
    if(this.verificaDados()){
      this.perfil = {
        cpf: this.cpf_usuario.replace(/-/g, "").replace(".", "").replace(".", ""),
        password: this.password
      };
      this.getLoginInfo(this.perfil);
    }
  }

  getLoginInfo(login_info: LoginInfo) {
    this.loginService.getLoginInfo(login_info).subscribe(
      success => {
        this.notificacao = {
          mensagem: 'Login realizado com sucesso!', 
          classe: 'alert-success', 
          validacao: true
        };
        this.limparNotificacao();
        this.router.navigateByUrl(this.path);
      },
      error => {
        console.log(error);
        this.notificacao = {
          mensagem: 'Erro de autenticação', 
          classe: 'alert-danger', 
          validacao: true
        };
        this.limparNotificacao();
      },
      () => {}
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

  private verificaDados() {
    let testResult = false
    if(this.cpf_usuario.length < 11 || !this.cpf_usuario.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      this.notificacao = {
        mensagem: 'CPF incompleto', 
        classe: 'alert-danger', 
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('CPF incompleto');
    }
    else if(!this.password.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      this.notificacao = {
        mensagem: 'Senha incompleta',
        classe: 'alert-danger',
        validacao: true
      };
      this.limparNotificacao();
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }

    return testResult;
  }
}
