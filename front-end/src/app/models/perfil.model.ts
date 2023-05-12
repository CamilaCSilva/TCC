// VOU PEGAR AS INFOS DIGITADAS
export interface PerfilInfo {
  cpf: string;
  campo_escolha: string;
  nome_completo: string;
  celular: string;
  documento_trabalho: string;
  unidade_de_atendimento: string;
  senha: string;

}


export interface PerfilInfoExistenteArray extends Array<PerfilInfo> {}
