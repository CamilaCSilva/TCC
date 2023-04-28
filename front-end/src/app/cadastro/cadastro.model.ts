// VOU PEGAR AS INFOS DIGITADAS
export interface CadastroInfo {
  nomeCompleto: string;
  areaAtuacao: string;
  crmCorenDrf: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string
  senha: string;
  senhaConfirmacao: string;
}

export interface CadastroInfoArray extends Array<CadastroInfo> {}
