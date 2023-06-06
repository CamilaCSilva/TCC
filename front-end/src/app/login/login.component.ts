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

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {}

  logar() {
    if(this.verificaDados()){
      this.perfil = {
        cpf: this.cpf_usuario.replace(/-/g, "").replace(".", "").replace(".", ""),
        password: this.password
      }      
      this.getLoginInfo(this.perfil);
    }
  }

  getLoginInfo(login_info: LoginInfo) {
    this.loginService.getLoginInfo(login_info).subscribe(
      success => {
        this.router.navigateByUrl(this.path);
      },
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  private verificaDados() {
    let testResult = false
    if(this.cpf_usuario.length < 11 || !this.cpf_usuario.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(!this.password.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }
    return testResult
  }
}
