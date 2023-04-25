import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  string = 'Faça seu cadastro!'

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {}

}
