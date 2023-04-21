import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-vitais-paciente',
  templateUrl: './dados-vitais-paciente.component.html',
  styleUrls: ['./dados-vitais-paciente.component.scss']
})
export class DadosVitaisPacienteComponent implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais';
  pressao: number;
  oxigenacao: number;
  temperatura: number;
  frequenciaRitmica: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    this.verificaDados();
    if(this.pressao && this.oxigenacao && this.temperatura && this.frequenciaRitmica) {
      this.router.navigateByUrl(this.path2);
    }
  }

  private verificaDados() {
    // if(this.pressao && this.oxigenacao.length < 6) {
    //   throwError('Nome incompleto');
    // }
    // else if(this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
    //   throwError('CPF incompleto');
    // }
    // else if(this.celular && !this.celular.match(new RegExp('^\([1-9]{2}\)([2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$'))){
    //   throwError('Celular incorreto');
    // }
    // else {
    //   this.testResult = true;
    // }
  }

}
