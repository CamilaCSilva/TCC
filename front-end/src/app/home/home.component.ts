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
    nome: 'Isabela',
    cpfUsuario: '12345678910',
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
    // if(data) {
    //   this.pacientes = this.pacientes.filter(a => a.data == data.toString());
    // } else {
    //   return;
    // }
  }

  visualizarFicha(paciente: any) {
    this.usuario.paciente = paciente;
    console.log(this.usuario)
    this.router.navigateByUrl('/home/fichas', this.usuario);
  }

  adicionarFicha() {
    this.router.navigateByUrl('/home/formularios', this.usuario);
  }

}
