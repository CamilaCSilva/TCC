import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path2: string = 'login/ficha/identificacao-paciente/dados-atendimento';
  nomeCompleto: string;
  cpf: string;
  celular: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seguir() {
    if(this.nomeCompleto && this.cpf && this.celular) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
