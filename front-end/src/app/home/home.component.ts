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
    nome_completo: '',
    cpf: '',
    documento_trabalho: ''
  }
  path = '/login';

  data: Date = new Date();

  constructor(private router: Router, private homeService: HomeService) {
    const nav = this.router.getCurrentNavigation();
    // this.usuario = nav?.extras;
  }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(
      res => {
        this.usuario = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  filtrarPorData(data: Date) {
    this.homeService.getFichasDisponiveis(data).subscribe(anamneseData => this.pacientes = anamneseData);
  }

  visualizarPerfil() {
    this.router.navigateByUrl('/home/perfil');
  }

  logout() {
    this.homeService.getLogoutUser().subscribe(
      res => {
        this.router.navigateByUrl(this.path);
      }
    );
  }

  visualizarFicha(paciente: any) {
    this.usuario.paciente = paciente;
    console.log(this.usuario.paciente);
    this.router.navigateByUrl('/home/fichas', this.usuario );
  }

  editarFicha(paciente: any) {
    this.usuario.paciente = paciente
    this.router.navigateByUrl('/home/formularios', this.usuario );
  }

  adicionarFicha() {
    this.router.navigateByUrl('/home/formularios', this.usuario);
  }
}
