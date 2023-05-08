// VOU PEGAR AS INFOS DIGITADAS
export interface PerfilInfo {
  nomeCompleto: string;
  campo_escolha: string;
  documentoTrabalho: string;
  cpf: string;
  unidadeDeAtendimento: string;
  telefone: string
}

export interface PerfilInfoArray extends Array<PerfilInfo> {}
