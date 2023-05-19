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
  usuario = {
    nome_paramedico: 'Isabela',
    cpfPaciente: '12365478996'
  }

  constructor(private router: Router, private fichaAnamneseService: FichaAnamneseService) { }

  ngOnInit(): void {
    this.listarAnamenese();
  }

  listarAnamenese(){
    this.fichaAnamneseService.getAnamneseInfo(this.usuario.cpfPaciente).subscribe(anamneseInfo => {
      this.anamnese = Object.assign({}, this.anamnese, anamneseInfo);
      console.log(this.anamnese)
      this.router.navigateByUrl(this.path1, this.anamnese);
    }, err => {
      console.log('Erro ao listar a anamnese', err)
    })
  }
}
