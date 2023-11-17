import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { FichaAnamneseService } from '../ficha-anamnese.service';
import { Anamnese } from 'src/app/models/anamnese.model';

@Component({
  selector: 'app-dados-atendimento',
  templateUrl: './dados-atendimento.component.html',
  styleUrls: ['./dados-atendimento.component.scss']
})
export class DadosAtendimentoComponent implements OnInit {

  path1: string = 'home/fichas/identificacao-paciente';
  path2: string = 'home/fichas/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  idade: Int16Array;
  tipoSangue: String;
  sexo: String;
  alergias: String;
  medicacoesUsadas: String;
  historicoDoencas: String;
  testResult: boolean = false;
  formGroup: UntypedFormGroup;
  tipo: String | null;
  anamnese: any;
  nome: string;
  ficha: Anamnese;

  constructor(private router: Router, private homeService: HomeService, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.homeService.value.subscribe(
      value => this.nome = value
    );
    this.ficha = this.fichaAnamneseService.get(this.nome)
    this.sexo = this.ficha.sexo;
    this.idade = this.ficha.idade;
    this.tipoSangue = this.ficha.tipo_sanguineo;
    this.alergias = this.ficha.alergias;
    this.medicacoesUsadas = this.ficha.medicacao_drogas;
    this.historicoDoencas = this.ficha.historico_doencas;
  }

  voltar(){
    this.router.navigateByUrl(this.path1, this.anamnese);
  }

  seguir() {
    this.router.navigateByUrl(this.path2, this.anamnese);
  }

}
