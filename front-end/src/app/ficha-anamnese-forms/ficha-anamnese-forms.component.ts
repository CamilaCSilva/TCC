import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anamnese } from '../models/anamnese.model';
import { FichaAnamneseService } from './ficha-anamnese-forms.service';

@Component({
  selector: 'app-ficha-anamnese-forms',
  templateUrl: './ficha-anamnese-forms.component.html',
  styleUrls: ['./ficha-anamnese-forms.component.scss']
})
export class FichaAnamneseFormsComponent implements OnInit {

  path1: string = 'home/formularios/identificacao-paciente-form'
  usuario: any;
  tipo: string | null;
  ficha: Anamnese = {
    cpf: '',
    paramedico: '',
    nome_completo:'',
    celular: '',
  sexo: '',
  idade: new Int16Array,
  tipo_sanguineo: '',
  alergias: '',
  medicacao_drogas: '',
  historico_doencas: '',
  queixa_principal: '',
  nivel_dor: '',
  classificacao_risco: '',
  observacoes: '',
  pressao_sanguinea: '',
  oxigenacao: '',
  temperatura: '',
  frequencia_cardiaca: '',
  data: new Date,
  hora: '',
  local: '',
  nome_paramedico_responsavel: '',
  documento_trabalho_paramedico: '',
  nome_usuario: ''
  }

  constructor(private router: Router, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.usuario = nav?.extras;
   }

  ngOnInit(): void {
    this.fichaFormsService.set('paciente', this.ficha)
    this.router.navigateByUrl(this.path1, this.usuario);
  }

}
