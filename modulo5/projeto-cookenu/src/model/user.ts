export type user = {
      name: "Alice",
      email: "alice@lbn.com",
      password: "123456"
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}