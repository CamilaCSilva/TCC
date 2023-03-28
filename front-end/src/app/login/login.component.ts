import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  entrar(userName: string) {
    this.mensagem = "Bem vindo(a), " + userName + "!";
  }

}
