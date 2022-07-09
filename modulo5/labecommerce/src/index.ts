import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request,Response } from "express";
import connection from "./connection";
import {v4 as generateID} from "uuid"


const app = express();

app.use(express.json());
app.use(cors());


app.post("/users", async(req:Request , res:Response)=>{
  try {
      
    await connection ("labecommerce_users")
     .insert ({
      id: generateID(),
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password
     })
    res.status(200).send("Usuário cadastrado")
   
  } catch (error) {
      res.status(400).send("Usuário não cadastrado")
  }
  
  
  })

  app.get ("/users", async(req:Request , res:Response)=>{
  try {
    const response= await connection("labecommerce_users")
    .select ("*")

    res.status(200).send(response)
    
  } catch (error) {
    res.status(400).send("Lista não retornada")
  }

  })

  app.post ("/products", async(req:Request , res:Response)=>{
   try {
    
    await connection ("labecommerce_products")
    .insert ({
      id: generateID(),
      nome: req.body.nome,
      price: req.body.price,
      image_url: req.body.image_url
    })
    res.status(200).send("Produto cadastrado")

   } catch (error) {
    res.status(400).send("Produto não cadastrado")
   }

  })

  app.get ("/products", async(req:Request , res:Response)=>{
    try {
      const response= await connection("labecommerce_products")
      .select ("*")
  
      res.status(200).send(response)
      
    } catch (error) {
      res.status(400).send("Produto não encontrado")
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