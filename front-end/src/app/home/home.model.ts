// VOU PEGAR INFOS DO BANCO
export interface FichasDisponiveis {
  cpf: string;
  senha: string;
  is_correct: boolean;
}

export interface FichasDisponiveisArray extends Array<FichasDisponiveis> {}
