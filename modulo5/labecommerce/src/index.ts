import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request,Response } from "express";


const app = express();

app.use(express.json());

app.post("/users",(req:Request , res:Response)=>{
try {
    
  const {name , email , password } = req.body


} catch (error) {
    res.status(400).send("Usuário não cadastrado")
}


})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;