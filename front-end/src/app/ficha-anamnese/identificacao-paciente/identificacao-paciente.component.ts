import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path1: string = 'ficha';
  path2: string = 'ficha/identificacao-paciente/dados-atendimento';
  nomeCompleto: string;
  cpf: string;
  celular: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.nomeCompleto && this.cpf && this.celular) {
      this.router.navigateByUrl(this.path2);
    }
  }

}
