import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento';
  nomeCompleto: string;
  cpf: string;
  celular: string;
  message: string = '';
  testResult: boolean = false;
  tipo: string | null;
  anamnese: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.nomeCompleto = this.anamnese.nome_completo;
    this.cpf = this.anamnese.cpf;
    this.celular = this.anamnese.celular;
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

}
