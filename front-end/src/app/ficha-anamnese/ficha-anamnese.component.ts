import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.scss']
})
export class FichaAnamneseComponent implements OnInit {

  nomePaciente: string = 'Isabela';
  tipo: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('home/fichas/identificacao-paciente');
  }
}
