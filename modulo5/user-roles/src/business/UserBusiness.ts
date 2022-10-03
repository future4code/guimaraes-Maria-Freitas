import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";

export class UserBusiness {
  public createUser = async (input:UserInputDTO) => {
   let {name, nickname, email ,password, role} = input
  
  if (!name || !nickname || !email || !password || !role){
   throw new CustomError (422 , "Ausência de parâmetros")
  }

 if(role !== "NORMAL" && role ! =="ADMIN"){
  role ="NORMAL"
 }

}
}