import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anamnese } from '../models/anamnese.model';
import { PerfilInfo } from '../models/perfil.model';

@Component({
  selector: 'app-ficha-anamnese-forms',
  templateUrl: './ficha-anamnese-forms.component.html',
  styleUrls: ['./ficha-anamnese-forms.component.scss']
})
export class FichaAnamneseFormsComponent implements OnInit {

  usuario: any = {
    'nomeParamedico': '',
    'documento_trabalho': '',
  };
  nomePaciente: string = this.usuario['nomeParamedico'];
  tipo: string | null;
  anamnese: Anamnese;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const nav = this.router.getCurrentNavigation();
    this.usuario = nav?.extras;
   }

  ngOnInit(): void {
    this.usuario['nomeParamedico'] = 'Matheus';
    this.usuario['documento_trabalho'] = '654256';
    this.router.navigateByUrl('home/formularios/identificacao-paciente-form', this.usuario);
  }

}
