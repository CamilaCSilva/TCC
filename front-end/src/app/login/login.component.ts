import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginInfo } from '../models/login.model';

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
  iconeMostrar: boolean = false;
  iconeEsconder: boolean = true;

  notificacao: any = {
    texto: '',
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
        console.log(success);
        this.mostrarNotificacao('Login realizado com sucesso!', 'alert-success', true);
        setTimeout(() => {
          console.log("Temporizador de 1 segundo");
        }, 1000);
        this.router.navigateByUrl(this.path);
      },
      error => {
        console.log(error);
        this.mostrarNotificacao('Erro de autenticação', 'alert-danger', true);
      },
      () => console.log('request completo')
    );
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

  mostrarNotificacao(texto: string, classe: string, validacao: boolean){
    this.notificacao = {
      texto: texto,
      classe: classe,
      validacao: validacao
    };
    this.limparNotificacao();
  }

  mostrarSenha(event: any) {
    if(event.type == 'password') {
      event.type = 'text';
      this.iconeMostrar = true;
      this.iconeEsconder = false;
    } else {
      event.type = 'password';
      this.iconeMostrar = false;
      this.iconeEsconder = true;
    }
  }

  private verificaDados() {
    let testResult = false
    if(this.cpf_usuario.length < 11 || !this.cpf_usuario.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      this.mostrarNotificacao('CPF incompleto', 'alert-danger', true);
      throw new Error('CPF incompleto');
    }
    else if(!this.password.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      this.mostrarNotificacao('Senha incompleta', 'alert-danger', true);
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }

    return testResult;
  }
}
