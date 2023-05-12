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
  areaAtuacao: string;
  cadastroInfo: PerfilInfo;

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar(cadastro: any) {
    if(this.verificaDados(cadastro)) {
      this.router.navigateByUrl(this.path);
      this.cadastroInfo = {
        nome_completo: cadastro.value.nomeCompleto,
        campo_escolha: cadastro.value.seletor,
        documento_trabalho: cadastro.value.doc,
        cpf: cadastro.value.cpf,
        unidade_de_atendimento: cadastro.value.unidadeAtendimento,
        celular: cadastro.value.celular,
        senha: cadastro.value.senha,
      };
      this.setCadastroInfo();
    }
  }

  setCadastroInfo() {
    this.cadastroService.setCadastroInfo(this.cadastroInfo).subscribe(
      success => console.log('Sucesso!'),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'CRM') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'COREN') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'DRF') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

  private verificaDados(cadastro: any) {
    let testResult: boolean = false;
    if(cadastro.value.nomeCompleto == '' && cadastro.value.nomeCompleto.length < 6 && cadastro.value.nomeCompleto.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if ( cadastro.value.seletor == '' ){
      alert('Escolha sua área de atuação');
      throw new Error('Escolha sua área de atuação');
    }
    else if(cadastro.value.doc == ''){
      alert('Preencha seu documento de trabalho');
      throw new Error('Preencha seu documento de trabalho');
    }
    else if (cadastro.value.cpf == '' && cadastro.value.cpf.length < 11 || !cadastro.value.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(cadastro.value.unidadeAtendimento == ''){
      alert('Preencha o campo de qual unidade você atua');
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (cadastro.value.celular == '' && cadastro.value.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (cadastro.value.senha == '' && !cadastro.value.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else if(cadastro.value.senha != cadastro.value.confirmaSenha){
      alert('As senha não são iguais');
      throw new Error('As senha não são iguais');
    }
    else {
      testResult = true;
    }
    return testResult
  }
}
