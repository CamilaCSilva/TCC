// VOU PEGAR INFOS DO BANCO
export interface LoginInfoExistente {
  cpf: string;
  password: string;
  is_correct: boolean;
}

export interface LoginInfoExistenteArray extends Array<LoginInfoExistente> {}
