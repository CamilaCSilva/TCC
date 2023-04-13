import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  string = 'Faça o login!'

  usuario = {
    id: '1',
    cpf: '',
    senha: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // entrar(userName: string) {
  //   this.mensagem = "Bem vindo(a), " + userName + "!";
  // }

  logar(){
    alert("Login realizado com sucesso")
  }

}
