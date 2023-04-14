import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.scss']
})
export class FichaAnamneseComponent implements OnInit {

  nomePaciente: string = 'Isabela';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['ficha/identificacao-paciente'] , { relativeTo: this.activatedRoute })
  }

}
