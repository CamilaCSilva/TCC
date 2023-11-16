import { Component, OnInit, createNgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAnamneseService } from './ficha-anamnese.service';
import { Anamnese } from '../models/anamnese.model';
import { PerfilInfo } from '../models/perfil.model';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.scss']
})
export class FichaAnamneseComponent implements OnInit {

  tipo: string | null;
  path1: string = "home/fichas/identificacao-paciente";
  anamnese: any;
  perfil: PerfilInfo;

  constructor(private router: Router, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    console.log(this.anamnese);
    this.listarProfissional()
  }

  listarProfissional() {
    this.fichaAnamneseService.getParamedicoInfo(this.anamnese?.paciente?.paramedico).subscribe(perfilInfo => {
      this.anamnese.paciente.nomeParamedico = perfilInfo.nome_completo
      this.anamnese.paciente.documento_trabalho = perfilInfo.documento_trabalho
      this.router.navigateByUrl(this.path1, this.anamnese);
    }, err => {
      console.log('Erro ao listar o profissional', err);
    })
  }

}
