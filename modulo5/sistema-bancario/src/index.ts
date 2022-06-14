import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { Cliente, usuario } from './data';
import { setOriginalNode } from 'typescript';



const app: Express = express();

app.use(express.json());
app.use(cors());



// Criação novo usuário - método post


app.post("/user",(req, res)=>{
  try {
    const name= req.body.name
    const documento= req.body.cpf
    const data= req.body.data
        
   const newUsers:Cliente={
     nome: name,
     cpf: documento,
     dataNascimento:data,
     saldo:0,
     extrato: []
   }
   usuario.push(newUsers)
   res.status(200).send(usuario)

  } catch (error:any) {
    res.status(400).send(error.message)
  }

})


// Pegar os usuários

app.get('/users', (req, res) => {
    res.status(200).send(usuario)
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});