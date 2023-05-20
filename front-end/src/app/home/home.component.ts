import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Anamnese } from '../models/anamnese.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fichas') fichasElement: ElementRef;

  pacientes: Anamnese[];

  usuario: any = {
    nome: 'Matheus',
    cpfUsuario: '78965412320',
    documento_trabalho: '78965',
    tokem: '',
    paciente: '',
  }

  data: Date;
  tipo: boolean;

  constructor(private router: Router, private homeService: HomeService) {
    const nav = this.router.getCurrentNavigation();
    // this.usuario = nav?.extras;
  }

  ngOnInit(): void {
    console.log(this.usuario)
  }

  filtrarPorData(data: Date) {
    this.homeService.getFichasDisponiveis(data).subscribe(anamneseData => this.pacientes = anamneseData);
  }

  visualizarPerfil(){
    this.router.navigateByUrl('/home/perfil', this.usuario)
  }

  visualizarFicha(paciente: any) {
    this.usuario.paciente = paciente;
    this.router.navigateByUrl('/home/fichas', this.usuario);
  }

  adicionarFicha() {
    this.router.navigateByUrl('/home/formularios', this.usuario);
  }

}
