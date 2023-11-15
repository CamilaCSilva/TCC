import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-paciente-form',
  templateUrl: './identificacao-paciente-form.component.html',
  styleUrls: ['./identificacao-paciente-form.component.scss']
})
export class IdentificacaoPacienteFormComponent implements OnInit {

  path1: string = 'home';
  path2: string = 'home/formularios/identificacao-paciente-form/dados-atendimento-form';
  message: string = '';
  anamnese: any;
  @Input() nomeCompleto: string = '';
  @Input() cpf_paciente: string = '';
  @Input() celular_paciente: string = '';

  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
    const nav = this.router.getCurrentNavigation();
    console.log(nav?.extras)
    this.anamnese = nav?.extras;
   }

  ngOnInit(): void {
    if(this.anamnese.nomeCompleto != ''){
      this.nomeCompleto = this.anamnese.nomeCompleto;
      this.cpf_paciente = this.anamnese.cpf_paciente;
      this.celular_paciente = this.anamnese.celular_paciente;
    }
  }

  seguir() {
    this.anamnese = Object.assign({}, this.anamnese);
    if(this.verificaDados()){
      this.anamnese.nomeCompleto = this.nomeCompleto;
      this.anamnese.cpf_paciente = this.cpf_paciente.replace(/-/g, "").replace(".", "").replace(".", "");
      this.anamnese.celular_paciente = this.celular_paciente.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.router.navigateByUrl(this.path2, this.anamnese);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

  private verificaDados(): boolean {
    let testResult: boolean = false;
    if(this.nomeCompleto == undefined || this.nomeCompleto.length < 6) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if(this.cpf_paciente == undefined || this.cpf_paciente.length < 11 || this.cpf_paciente.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')) == null) {
      alert('CPF no formato errado ou com menos caracteres do que esperado');
      console.log(this.cpf_paciente)
      throw new Error('CPF incompleto');
    }
    else if(this.celular_paciente == undefined || this.celular_paciente.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
