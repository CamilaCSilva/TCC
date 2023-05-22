import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginInfo } from '../models/login.model';
import { LoginInfoExistente, LoginInfoExistenteArray } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  path = '/home';
  stringFacaLogin = 'Faça o login!';
  cpf_usuario: string;
  senha: string;
  testResult: boolean = false;
  loginInfoExistente: LoginInfoExistenteArray;

  usuario: any;
  perfil: LoginInfo;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {}

  logar() {
    this.verificaDados();
    if(this.testResult) {
      this.router.navigateByUrl(this.path);
      /*
      this.loginInfoExistente = this.getLoginInfo();
      if(this.loginInfoExistente) {
        this.loginInfoExistente.map((data) => {
          data.cpf == this.cpf &&
          data.senha == this.senha &&
          data.is_correct == this.testResult ?
          this.router.navigateByUrl(this.path) :
          new Error('Informações de Login incorretas');
        });
      }
      */
    
    }
  }

  getLoginInfo(): any {
    this.loginService.getLoginInfo(this.usuario.cpf_usuario).subscribe(perfil_info => {
      // this.perfil = perfil_info;
      // this.mostrarProfissional();
      console.log(this.usuario.cpf_usuario);
    }, err => {
      console.log('Erro ao listar o profissional', err)
    })
  }

  private verificaDados() {
    if(this.cpf_usuario && this.cpf_usuario.length < 11 || !this.cpf_usuario.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(this.senha && !this.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      this.getLoginInfo();
      this.testResult = true;
    }
  }
}
