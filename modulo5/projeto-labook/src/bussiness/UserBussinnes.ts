import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRequest } from "../error/InvalidEmail";
import { ShortName } from "../error/ShortName";
import { user, UserInputDTO } from "../model/user";
import { generateId } from "../services/generatId


export class UserBusiness {
	public createUser = async (input: UserInputDTO) => {
		try {
			const { name, email, password } = input;

			if (!name || !email || !password) {
				throw new InvalidRequest()
			}

			if (!email.includes("@")) {
				throw new InvalidEmail()
			}

			if (name.length < 3) {
				throw new ShortName()
			}


			const id: string = generateId()

			const userDatabase = new 

        }
    }