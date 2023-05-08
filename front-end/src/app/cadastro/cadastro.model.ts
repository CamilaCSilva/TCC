// VOU PEGAR AS INFOS DIGITADAS
export interface CadastroInfo {
  nomeCompleto: string;
  campo_escolha: string;
  documentoTrabalho: string;
  cpf: string;
  unidadeDeAtendimento: string;
  telefone: string
  senha: string;
  senhaConfirmacao: string;
}

export interface CadastroInfoArray extends Array<CadastroInfo> {}
