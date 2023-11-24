import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anamnese } from '../models/anamnese.model';
import { Notification } from '../shared/shared.model';
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
  ficha: Anamnese;

  constructor(private router: Router, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente');
    this.router.navigateByUrl(this.path1);
  }
}
