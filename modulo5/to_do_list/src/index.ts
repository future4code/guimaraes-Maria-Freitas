import cors from 'cors';
import { AddressInfo } from "net";
import express from "express";
import {Request , Response} from "express";
import connection from './connection';
import {v4 as generateId} from 'uuid'


 
const app = express();

app.use(express.json());
app.use(cors()); 


app.post('/user',async (req:Request , res:Response) => {

const {id,name,nickname,email} = req.body
try {
  await connection.raw(`
  INSERT INTO User (id,name,nickname,email)
   VALUES (
     ${id}
   \"${name}"\,
   \"${nickname}"\,
   \"${email}"\,
   )
`)
  
}catch(err) {
 res.status(500).send ("Algo naão rolou.")
}

res.status(200).send ("Ok")

})



 
     



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

export default app
