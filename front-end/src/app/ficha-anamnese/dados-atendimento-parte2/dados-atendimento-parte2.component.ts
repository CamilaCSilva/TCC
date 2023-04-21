import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-atendimento-parte2',
  templateUrl: './dados-atendimento-parte2.component.html',
  styleUrls: ['./dados-atendimento-parte2.component.scss']
})
export class DadosAtendimentoParte2Component implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente/dados-atendimento';
  path2: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  sintomas: string;
  nivelDor: number;
  prioridade: string = 'nao-urgente';
  observacoes: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigateByUrl(this.path1);
  }

  seguir() {
    if(this.sintomas.length > 0 && this.nivelDor) {
      this.router.navigateByUrl(this.path2);
    }
  }

  onPrioridadeChange(prioridade: string) {
    if(prioridade == 'nao-urgente') { console.log('Não urgente'); }
    else if(prioridade == 'pouco-urgente') { console.log('Pouco urgente'); }
    else if(prioridade == 'urgente') { console.log('Urgente'); }
    else if(prioridade == 'emergencia') { console.log('Emergência'); }
  }

  getPrioridade(event: Event) {
    this.prioridade = (event.target as HTMLInputElement).value;
    return this.prioridade;
  }
}
