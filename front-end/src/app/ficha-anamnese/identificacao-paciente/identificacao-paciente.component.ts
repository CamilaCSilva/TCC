import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.component.html',
  styleUrls: ['./identificacao-paciente.component.scss']
})
export class IdentificacaoPacienteComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento';
  nomeCompleto: string;
  cpf: string;
  celular: string;
  message: string = '';
  testResult: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seguir() {
    this.verificaDados();
    if(this.testResult){
      this.router.navigateByUrl(this.path2);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

  private verificaDados() {
    if(this.nomeCompleto && this.nomeCompleto.length < 6 && this.nomeCompleto.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      console.log('Passou aqui');
      throw new Error('Nome incompleto');
    }
    else if(this.cpf && this.cpf.length < 11 || this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')) == null) {
      alert('CPF no formato errado ou com menos caracteres do que esperado');
      throw new Error('CPF incompleto');
    }
    else if(this.celular && this.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else {
      this.testResult = true;
    }
  }

}
