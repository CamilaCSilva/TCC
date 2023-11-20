import { Component, OnInit, createNgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAnamneseService } from './ficha-anamnese.service';
import { PerfilInfo } from '../models/perfil.model';
import {Anamnese} from '../models/anamnese.model';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.scss']
})
export class FichaAnamneseComponent implements OnInit {

  tipo: string | null;
  path1: string = "home/fichas/identificacao-paciente";
  perfil: PerfilInfo;
  nome_usuario: string;
  ficha: Anamnese;

  constructor(private router: Router,
    private fichaAnamneseService: FichaAnamneseService) {
  }

  ngOnInit(): void {
    this.ficha = this.fichaAnamneseService.get('ficha')
    this.listarProfissional()
  }
  
  listarProfissional() {
    this.fichaAnamneseService.getParamedicoInfo(this.ficha.paramedico).subscribe(perfilInfo => {
      this.ficha.nome_paramedico_responsavel = perfilInfo.nome_completo
      this.ficha.documento_trabalho_paramedico = perfilInfo.documento_trabalho
      this.fichaAnamneseService.set('ficha', this.ficha)
      this.router.navigateByUrl(this.path1);
    }, err => {
      console.log('Erro ao listar o profissional', err);
    })
  }

}
