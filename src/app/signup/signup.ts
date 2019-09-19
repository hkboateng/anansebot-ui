export class NewUser {
  userId: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  emailAddress: string;
  subscription: string;

  constructor(signup: NewUser ){
    this.username = signup.username;
    this.password = signup.password;
    this.firstname = signup.firstname;
    this.lastname = signup.lastname;
    this.phoneNumber = signup.phoneNumber;
    this.emailAddress = signup.emailAddress;
  }
}

export class SignupRequest {
  requestType: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  emailAddress: string;

  constructor(signup: any) {
    this.username = signup.username;
    this.password = signup.password;
    this.firstname = signup.firstname;
    this.lastname = signup.lastname;
    this.phoneNumber = signup.phoneNumber;
    this.emailAddress = signup.emailAddress;
  }
}

export class SignupResponse {
  status: boolean;
  responseMessage: string;
  responseStatus: string;
}
