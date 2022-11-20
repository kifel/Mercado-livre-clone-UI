export interface User {
  login: String;
  senha: String;
}

export type StackParams = {
  Login: undefined;
  Senha: undefined;
  Products: undefined;
};

export interface Product {
  name: String;
  value: number;
  seller: String;
  image: String;
}
