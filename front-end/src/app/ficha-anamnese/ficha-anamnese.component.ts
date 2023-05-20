import { Component, OnInit, createNgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaAnamneseService } from './ficha-anamnese.service';
import { Anamnese } from '../models/anamnese.model';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.scss']
})
export class FichaAnamneseComponent implements OnInit {

  tipo: string | null;
  path1: string = "home/fichas/identificacao-paciente";
  anamnese: any;

  constructor(private router: Router, private fichaAnamneseService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
  }

  ngOnInit(): void {
    this.listarAnamenese();
  }

  private listarAnamenese(){
    this.fichaAnamneseService.getAnamneseInfo(this.anamnese.cpfPaciente).subscribe(anamneseInfo => {
      this.anamnese = Object.assign({}, this.anamnese, anamneseInfo);
      console.log(this.anamnese)
      this.router.navigateByUrl(this.path1, this.anamnese);
    }, err => {
      console.log('Erro ao listar a anamnese', err)
    })
  }

}
