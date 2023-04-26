import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  path = '/home';
  stringFacaLogin = 'Faça o login!';
  cpf: string;
  senha: string;
  testResult: boolean = false;
  loginInfo: Array<any>;
  loginInfosModel: Login;

  constructor(private router: Router) { }

  ngOnInit(): void {}


  logar() {
    this.verificaDados();
    if(this.testResult) {
      this.loginInfo = [this.cpf, this.senha, this.testResult];
      this.loginInfosModel.cpf = this.loginInfo[0];
      this.loginInfosModel.senha = this.loginInfo[1];
      this.loginInfosModel = this.loginInfo[2];
      this.router.navigateByUrl(this.path);
    }
  }

  private verificaDados() {
    if(this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(this.senha && !this.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      this.testResult = true;
    }
  }
}
