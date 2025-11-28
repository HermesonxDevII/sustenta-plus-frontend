export interface LoginForm {
  email: string,
  password: string
}

export interface RegisterForm {
  name: string,
	email: string,
	password: string,
	cpf: string,
	phone: string,
	role_id: number
}

export interface SelectOptions {
  name: string,
  value: string | number
}

export interface User {
  name: string,
  email: string,
  ability: string
}
