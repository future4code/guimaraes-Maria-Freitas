import * as userBusiness from '../business/userBusiness'

async createUSer(req: Request, res: Response) : Promise<void> {

        
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            await new userBusiness().createUser(input);

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }

