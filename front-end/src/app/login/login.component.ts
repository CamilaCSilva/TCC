import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  path = '/home';
  string = 'Faça o login!';
  cpf: string;
  senha: string;

  usuario = {
    id: '1',
    cpf: '',
    senha: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {}

  logar() {
    if(this.cpf && this.senha) {
      this.router.navigateByUrl(this.path);
    }
  }

}
