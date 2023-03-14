export interface auth {
  Documento: string;
  Cdo: string;
}

export interface authLogin {
  name: string;
  documento: string;
  token: string;
  cdo: string;
  rol: string;
}

export interface ISession {
  login: boolean;
  user: string;
}