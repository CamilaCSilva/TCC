import { PerfilInfo } from "./perfil.model";

// VOU PEGAR AS INFOS DIGITADAS
export class Validacao {



  public verificaDadosPerfil(cadastro: PerfilInfo) {
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
      console.log(cadastro.senha)
      throw new Error('Senha incompleta');
    }
    else {
      testResult = true;
    }
    return testResult
  }

}
