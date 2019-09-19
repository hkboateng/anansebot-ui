export class LoginUser {
  userId: number;
  username: string;
  password: string;
  accountLocked: boolean;
  accountActivated: boolean;
  accountExpired: boolean;

  constructor(user: string, passwd: string){
    this.username = user;
    this.password = passwd;
    this.accountLocked = true;
    this.accountExpired = true;
    this.accountActivated = false;
  }
}

export class User {
  userId: number;
  username: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  emailAddress: string;
}

export class LoginResponse {
  status: boolean;
  responseState: boolean;
  responseMessage: string;
  responseUsername: string;
  responseStatus: string;
  responseCode: number;
  token: string;
  hasError: boolean;
}
export class LoginRequest {
  username: string;
  password: string;

  constructor(username: string, pass: string){
    this.password = pass;
    this.username = username;
  }
}
