import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

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

  constructor(private router: Router) { }

  ngOnInit(): void {}


  logar() {
    this.verificaDados();
    if(!this.testResult) {
      this.router.navigateByUrl(this.path);
    }
  }

  private verificaDados() {
    if(this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      throwError('CPF incompleto');
    }
    else if(this.senha && !this.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      throwError('Senha incompleta');
    }
    else {
      this.testResult = true;
    }
  }
}
