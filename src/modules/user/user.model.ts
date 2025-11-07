export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}


export interface GoogleUser extends CreateUserInput {
  id: string,
  verified_email: boolean
  given_name: string
  family_name: string
  picture: string
}