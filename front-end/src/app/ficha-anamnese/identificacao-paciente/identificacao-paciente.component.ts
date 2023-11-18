import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Anamnese} from 'src/app/models/anamnese.model';
import { HomeService } from 'src/app/home/home.service';
import { FichaAnamneseService } from '../ficha-anamnese.service';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento';
  nomeCompleto: String;
  cpf: String;
  celular: String;
  message: String = '';
  testResult: boolean = false;
  tipo: String | null;
  anamnese: any;
  nome: string;
  ficha: Anamnese;

  constructor(private router: Router, private fichaAnamneseService: FichaAnamneseService) {
    
  }

  ngOnInit(): void {
    this.ficha = this.fichaAnamneseService.get('ficha')
    this.nomeCompleto = this.ficha.nome_completo;
    this.cpf = this.ficha.cpf.slice(0,3) + "." + this.ficha.cpf.slice(3,6)+ "." + this.ficha.cpf.slice(6,9) + "-" + this.ficha.cpf.slice(9);
    this.celular = "(" + this.ficha.celular.slice(0, 2) + ") " + this.ficha.celular.slice(2,7) + "-" + this.ficha.celular.slice(7);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

  voltar() {
    this.fichaAnamneseService.delete('ficha')
    this.router.navigateByUrl(this.path1);
  }

}
