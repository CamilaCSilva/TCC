import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent {

  string = 'Faça seu cadastro!'

  constructor() { }

  ngOnInit(): void {
  }

}
