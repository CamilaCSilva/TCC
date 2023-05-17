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
  message: string = '';
  anamnese: any = '';
  nomeCompleto: string = '';
  cpf: string = '';
  celular: string = '';

  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
    const nav = this.router.getCurrentNavigation();
    this.anamnese = nav?.extras;
   }

  ngOnInit(): void {
    if(this.anamnese.nomeCompleto != ''){
      this.nomeCompleto = this.anamnese.nomeCompleto;
      this.cpf = this.anamnese.cpf;
      this.celular = this.anamnese.celular;
    }
  }

  seguir(idPaciente: any) {
    this.anamnese = Object.assign({}, this.anamnese, idPaciente.value);
    if(this.verificaDados(this.anamnese)){
      this.router.navigateByUrl(this.path2, this.anamnese);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

  private verificaDados(anamnese: any): boolean {
    console.log(anamnese);
    let testResult: boolean = false;
    if(anamnese.nomeCompleto == undefined || anamnese.nomeCompleto.length < 6) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if(anamnese.cpf == undefined || anamnese.cpf.length < 11 || anamnese.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')) == null) {
      alert('CPF no formato errado ou com menos caracteres do que esperado');
      throw new Error('CPF incompleto');
    }
    else if(anamnese.celular == undefined || anamnese.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else {
      testResult = true;
    }
    return testResult;
  }

}
