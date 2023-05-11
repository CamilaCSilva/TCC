import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-paciente-form',
  templateUrl: './identificacao-paciente-form.component.html',
  styleUrls: ['./identificacao-paciente-form.component.scss']
})
export class IdentificacaoPacienteFormComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form';
  nomeCompleto: string;
  cpf: string;
  celular: string;
  message: string = '';
  testResult: boolean = false;
  tipo: string | null;

  constructor(private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.tipo = this.activatedRoute.snapshot.queryParamMap.get("tipo");
  }

  seguir() {
    this.verificaDados();
    if(this.testResult){
      this.router.navigate([this.path2], { queryParams: { tipo: this.tipo } } );
    }
  }

  voltar() {
    this.router.navigate([this.path1], { queryParams: { tipo: this.tipo } } );
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
