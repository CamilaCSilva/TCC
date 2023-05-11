import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { CadastroInfo, CadastroInfoArray } from './cadastro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  path: string = 'login';
  string = 'Faça seu cadastro!'
  nomeCompleto: string;
  areaAtuacao: string = 'medico';
  documento_trabalho: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string
  senha: string;
  senhaConfirmacao: string;
  testResult: boolean = false;
  cadastroInfo: CadastroInfo;
  cadastroInfoArray: CadastroInfoArray;

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar() {
    this.verificaDados();
    if(this.testResult && this.documento_trabalho && this.unidadeAtendimento) {
      this.router.navigateByUrl(this.path);
      // this.cadastroInfo = {
      //   nomeCompleto: this.nomeCompleto,
      //   areaAtuacao: this.areaAtuacao,
      //   documento_trabalho: this.documento_trabalho,
      //   cpf: this.cpf,
      //   unidadeAtendimento: this.unidadeAtendimento,
      //   celular: this.celular,
      //   senha: this.senha,
      //   senhaConfirmacao: this.senhaConfirmacao
      // };
      // this.cadastroInfoArray = [this.cadastroInfo];
      // this.setCadastroInfo(this.cadastroInfoArray);
    }
  }

  setCadastroInfo(cadastroInfoArray: CadastroInfoArray): any {
    this.cadastroService.setCadastroInfo(cadastroInfoArray);
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'medico') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'enfermeiro') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'paramedico') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

  private verificaDados() {
    if(this.nomeCompleto && this.nomeCompleto.length < 6 && this.nomeCompleto.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if (this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if (this.celular && this.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (this.senha && !this.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      this.testResult = true;
    }
  }
}
