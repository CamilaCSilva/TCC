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
  nome_completo: string;
  areaAtuacao: string;
  doc: string;
  cpf: string;
  unidade_atendimento: string;
  celular: string;
  password: string;
  confirmar_senha: string;
  cadastro_info: PerfilInfo;

  notificacao: any = {
    texto: '',
    classe: '',
    validacao: false
  }

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar() {
    this.cadastro_info = {
      cpf: this.cpf,
      campo_escolha: this.areaAtuacao,
      nome_completo: this.nome_completo,
      celular: this.celular,
      documento_trabalho: this.doc,
      unidade_de_atendimento: this.unidade_atendimento,
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
      success => {
        console.log(success);
        this.mostrarNotificacao('Cadastro realizado com sucesso!', 'alert-success', true);
        this.router.navigateByUrl(this.path);
      },
      error => {
        console.log(error);
        this.mostrarNotificacao('Erro ao cadastrar','alert-danger', true);
      },
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

  mostrarNotificacao(texto: string, classe: string, validacao: boolean){
    this.notificacao = {
      texto: texto,
      classe: classe,
      validacao: validacao
    };
    this.limparNotificacao();
  }

  limparNotificacao() {
    setTimeout(() => {
      this.notificacao = {
        texto: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }

  private verificaDadosPerfil(cadastro: PerfilInfo, confirma_senha: String) {
    let testResult: boolean = false;
    if(cadastro.nome_completo?.length < 6 || cadastro.nome_completo?.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      this.mostrarNotificacao('Nome incompleto', 'alert-danger', true);
      throw new Error('Nome incompleto');
    }
    else if ( cadastro.campo_escolha == '' || cadastro.campo_escolha == undefined) {
      this.mostrarNotificacao('Escolha sua área de atuação', 'alert-danger', true);
      throw new Error('Escolha sua área de atuação');
    }
    else if(cadastro.documento_trabalho == ''  || cadastro.documento_trabalho == undefined) {
      this.mostrarNotificacao('Preencha seu documento de trabalho', 'alert-danger', true);
      throw new Error('Preencha seu documento de trabalho');
    }
    else if (!cadastro.cpf?.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      this.mostrarNotificacao('CPF incompleto', 'alert-danger', true);
      throw new Error('CPF incompleto');
    }
    else if(cadastro.unidade_de_atendimento == '' || cadastro.unidade_de_atendimento == undefined) {
      this.mostrarNotificacao('Preencha o campo de qual unidade você atua', 'alert-danger', true);
      throw new Error('Preencha o campo de qual unidade você atua');
    }
    else if (cadastro.celular?.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null) {
      this.mostrarNotificacao('Celular no formato inesperado', 'alert-danger', true);
      throw new Error('Celular incorreto');
    }
    else if (!cadastro.password?.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))) {
      this.mostrarNotificacao('Senha incompleta', 'alert-danger', true);
      throw new Error('Senha incompleta');
    }
    else if(this.cadastro_info.password != confirma_senha) {
      this.mostrarNotificacao('As senha não são iguais', 'alert-danger', true);
      throw new Error('As senha não são iguais');
    }
    else {
      testResult = true;
    }

    return testResult;
  }

}
