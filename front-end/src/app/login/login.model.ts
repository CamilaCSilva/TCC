export interface Login {
  cpf: string;
  senha: string;
  is_correct: boolean;
}

interface LoginArray extends Array<Login> {}

export interface LoginInfosEsperadas {
  cpf: string;
  senha: string;
  is_correct: boolean;
  loginInfos: LoginArray;
}

export interface LoginInfosEsperadas extends Array<LoginInfosEsperadas> {}
