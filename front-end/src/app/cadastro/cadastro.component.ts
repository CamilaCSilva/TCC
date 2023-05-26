import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { PerfilInfo } from '../models/perfil.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  path: string = 'login';
  string = 'Faça seu cadastro!'
  nomeCompleto: string;
  areaAtuacao: string;
  doc: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string;
  password: string;
  confirmar_senha: string;
  cadastro_info: PerfilInfo;

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar() {
    this.cadastro_info = {
      cpf: this.cpf,
      campo_escolha: this.areaAtuacao,
      nome_completo: this.nomeCompleto,
      celular: this.celular,
      documento_trabalho: this.doc,
      unidade_de_atendimento: this.unidadeAtendimento,
      password: this.password
    };
    if(this.verificaDadosPerfil(this.cadastro_info, this.confirmar_senha)) {
      this.cadastro_info.cpf = this.cpf.replace(/-/g, "").replace(".", "").replace(".", "");
      this.cadastro_info.celular = this.celular.toString().replace(/-/g, "").replace(/ /g, "").replace("(", "").replace(")", "");
      this.setCadastroInfo(this.cadastro_info);
    }
  }

  setCadastroInfo(cadastro_info: PerfilInfo) {
    this.cadastroService.setCadastroInfo(cadastro_info).subscribe(
      success => this.router.navigateByUrl(this.path),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'CRM') { this.areaAtuacao = this.areaAtuacao; console.log('Médico(a)'); }
    else if(areaAtuacao == 'COREN') { this.areaAtuacao = this.areaAtuacao; console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'DRF') { this.areaAtuacao = this.areaAtuacao; console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

  private verificaDadosPerfil(cadastro: PerfilInfo, confirma_senha: String) {
    let testResult: boolean = false;
    if(cadastro.nome_completo?.length < 6 || cadastro.nome_completo?.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if ( cadastro.campo_escolha == '' || cadastro.campo_escolha == undefined) {
      alert('Escolha sua área de atuação');
      throw new Error('Escolha sua área de atuação');
    }
    else if(cadastro.documento_trabalho == ''  || cadastro.documento_trabalho == undefined) {
      alert('Preencha seu documento de trabalho');
      throw new Error('Preencha seu documento de trabalho');
    }
    else if (!cadastro.cpf?.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(cadastro.unidade_de_atendimento == '' || cadastro.unidade_de_atendimento == undefined) {
      alert('Preencha o campo de qual unidade você atua');
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (cadastro.celular?.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null) {
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (!cadastro.password?.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))) {
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else if(this.cadastro_info.password != confirma_senha) {
      alert('As senha não são iguais');
      throw new Error('As senha não são iguais');
    }
    else {
      testResult = true;
    }
    return testResult
  }

}