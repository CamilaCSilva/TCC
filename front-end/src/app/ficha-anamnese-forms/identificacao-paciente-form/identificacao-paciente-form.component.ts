import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilInfo } from 'src/app/models/perfil.model';
import { FichaAnamneseService } from '../ficha-anamnese-forms.service';
import { Anamnese } from 'src/app/models/anamnese.model';

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
  nomeCompleto: String = '';
  cpf_paciente: String = '';
  celular_paciente: String = '';
  ficha: Anamnese;

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private fichaFormsService: FichaAnamneseService) {
    const nav = this.router.getCurrentNavigation();
    
   }

  ngOnInit(): void {
    this.ficha = this.fichaFormsService.get('paciente')
    if(this.ficha.nome_completo != '' && this.ficha.nome_completo != undefined){
      this.nomeCompleto = this.ficha.nome_completo;
      this.cpf_paciente = this.ficha.cpf;
      this.celular_paciente = this.ficha.celular;
    }
  }

  seguir() {
    if(this.verificaDados()){
      // SETANDO INFORMAÇÕES LOCALMENTE
      this.ficha.nome_completo = this.nomeCompleto;
      this.ficha.cpf = this.cpf_paciente.replace(/-/g, "").replace(".", "").replace(".", "");
      this.ficha.celular = this.celular_paciente.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.fichaFormsService.set('paciente', this.ficha)
      this.router.navigateByUrl(this.path2);
    }
  }

  voltar() {
    this.fichaFormsService.delete('paciente')
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
