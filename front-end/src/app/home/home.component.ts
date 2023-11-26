import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Anamnese } from '../models/anamnese.model';
import { Notification } from '../shared/shared.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fichas') fichasElement: ElementRef;

  pacientes: Anamnese[];
  ficha: Anamnese = {
    cpf: '',
    paramedico: '',
    nome_completo: '',
    celular: '',
    sexo: '',
    idade: new Int16Array,
    tipo_sanguineo: '',
    alergias: '',
    medicacao_drogas: '',
    historico_doencas: '',
    queixa_principal: '',
    nivel_dor: '',
    classificacao_risco: '',
    observacoes: '',
    pressao_sanguinea: '',
    oxigenacao: '',
    temperatura: '',
    frequencia_cardiaca: '',
    data: new Date,
    hora: '',
    local: '',
    nome_paramedico_responsavel: '',
    documento_trabalho_paramedico: '',
    nome_usuario: ''
  }
  usuario: any = {
    nome_completo: '',
    cpf: '',
    documento_trabalho: '',
  }
  path = '/login';
  data: Date = new Date();

  notificacao: Notification = {
    mensagem: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private homeService: HomeService) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(
      res => {
        this.usuario = res;
      },
      err => {
        console.log(err);
        this.notificacao = {
          mensagem: 'Erro ao pegar usuário', 
          classe: 'alert-danger', 
          validacao: true
        };
        this.limparNotificacao();
        this.router.navigateByUrl('/login');
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
      }, err => {
        console.log(err);
        this.notificacao = {
          mensagem: 'Erro ao deslogar', 
          classe: 'alert-danger', 
          validacao: true
        };
        this.limparNotificacao();
      }
    );
  }

  visualizarFicha(paciente: any) {
    const localpaciente = paciente;
    localpaciente.nome_usuario = this.usuario.nome_completo;
    this.homeService.set('ficha', localpaciente);
    this.router.navigateByUrl('/home/fichas');
  }

  adicionarFicha() {
    this.ficha.nome_paramedico_responsavel = this.usuario.nome_completo;
    this.ficha.documento_trabalho_paramedico = this.usuario.documento_trabalho;
    this.ficha.paramedico = this.usuario.cpf;
    this.ficha.nome_usuario = this.usuario.nome_completo;
    this.homeService.set('paciente', this.ficha);
    this.router.navigateByUrl('/home/formularios');
  }

  limparNotificacao() {
    setTimeout(() => {
      this.notificacao = {
        mensagem: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }
}
