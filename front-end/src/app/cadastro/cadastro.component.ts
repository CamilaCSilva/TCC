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
  senhaConfirmacao: string;
  areaAtuacao: string;
  cadastroInfo: PerfilInfo;

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar(cadastro: any) {
    this.cadastroInfo = {
      nome_completo: cadastro.value.nomeCompleto,
      campo_escolha: cadastro.value.seletor,
      documento_trabalho: cadastro.value.doc,
      cpf: cadastro.value.cpf,
      unidade_de_atendimento: cadastro.value.unidadeAtendimento,
      celular: cadastro.value.celular,
      senha: cadastro.value.senha,
    };
    if(this.verificaDadosPerfil(this.cadastroInfo, cadastro.value.confirmaSenha)) {
        this.setCadastroInfo();
        this.router.navigateByUrl(this.path);
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

  private verificaDadosPerfil(cadastro: PerfilInfo, confirmaSenha: String) {
    let testResult: boolean = false;
    if(cadastro.nome_completo == '' || cadastro.nome_completo.length < 6 || cadastro.nome_completo.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if ( cadastro.campo_escolha == '' ){
      alert('Escolha sua área de atuação');
      throw new Error('Escolha sua área de atuação');
    }
    else if(cadastro.documento_trabalho == ''){
      alert('Preencha seu documento de trabalho');
      throw new Error('Preencha seu documento de trabalho');
    }
    else if (cadastro.cpf == '' || cadastro.cpf.length < 11 || !cadastro.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if(cadastro.unidade_de_atendimento == ''){
      alert('Preencha o campo de qual unidade você atua');
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (cadastro.celular == '' || cadastro.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (cadastro.senha == '' || !cadastro.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else if(this.cadastroInfo.senha != confirmaSenha){
      alert('As senha não são iguais');
      throw new Error('As senha não são iguais');
    }
    else {
      testResult = true;
    }
    return testResult
  }

}
