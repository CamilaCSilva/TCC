import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FichaAnamneseService } from '../ficha-anamnese.service';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seguir() {
    this.router.navigateByUrl(this.path2);
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

}
