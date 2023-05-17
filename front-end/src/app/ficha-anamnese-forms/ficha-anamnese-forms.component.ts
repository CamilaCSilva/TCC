import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anamnese } from '../models/anamnese.model';

@Component({
  selector: 'app-ficha-anamnese-forms',
  templateUrl: './ficha-anamnese-forms.component.html',
  styleUrls: ['./ficha-anamnese-forms.component.scss']
})
export class FichaAnamneseFormsComponent implements OnInit {

  nomePaciente: string = 'Matheus';
  tipo: string | null;
  anamnese: Anamnese;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigateByUrl('home/formularios/identificacao-paciente-form');
  }

}
