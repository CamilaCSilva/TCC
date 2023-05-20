import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';
import { PerfilInfo } from '../models/perfil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  path: string = 'home/perfil/editar-perfil';
  string = 'Perfil';
  testResult: boolean = false;
  perfil: PerfilInfo;
  nome_completo:String;
  campo_escolha: String;
  documento_trabalho: String;
  cpf: String;
  unidade_de_atendimento: String;
  celular: String;

  usuario: any;

  constructor(private router: Router, private perfilService: PerfilService) {
    const nav = this.router.getCurrentNavigation();
    this.usuario = nav?.extras;
  }

  ngOnInit(){
    console.log(this.usuario)
    this.listarProfissional();
  }

  listarProfissional(){
    this.perfilService.getPerfilInfo(this.usuario.cpfUsuario).subscribe(perfilInfo => {
    this.perfil = perfilInfo;
    this.mostrarProfissional();
    if(this.perfil?.campo_escolha == 'CRM') { this.perfil.campo_escolha = 'Médico(a)'; }
    else if(this.perfil?.campo_escolha == 'COREN') { this.perfil.campo_escolha = 'Enfermeiro(a)'; }
    else if(this.perfil?.campo_escolha == 'DRF') { this.perfil.campo_escolha = 'Paramédico(a)'; }
    }, err => {
      console.log('Erro ao listar o profissional', err)
    })
  }

  editar(){
    console.log(this.usuario)
    this.router.navigateByUrl(this.path, this.usuario);
  }

  mostrarProfissional(){
    this.nome_completo = this.perfil.nome_completo;
    this.campo_escolha = this.perfil.campo_escolha;
    this.documento_trabalho = this.perfil.documento_trabalho;
    this.cpf = this.perfil.cpf;
    this.unidade_de_atendimento = this.perfil.unidade_de_atendimento;
    this.celular = this.perfil.celular;
  }

  home(){
    this.router.navigateByUrl('/home', this.usuario)
  }

}
