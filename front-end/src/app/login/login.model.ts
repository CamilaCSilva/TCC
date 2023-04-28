// VOU PEGAR INFOS DO BANCO
export interface LoginInfoExistente {
  cpf: string;
  senha: string;
  is_correct: boolean;
}

export interface LoginInfoExistenteArray extends Array<LoginInfoExistente> {}
