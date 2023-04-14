import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento';
  nomeCompleto: string;
  cpf: string;
  celular: number;
  message: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validaNome(nomeCompleto: string): boolean {
    if(nomeCompleto.length < 6) {
      this.message = 'Preencha com o nome completo';
      return true;
    }

    return false;
  }

  seguir() {
    if(this.nomeCompleto && this.cpf && this.celular) {
      this.router.navigateByUrl(this.path2);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

}
