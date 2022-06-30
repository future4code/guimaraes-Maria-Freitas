import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { usuario,usuarios } from "./data";

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req:Request , res:Response)=>{
 res.status(200).send("Hello from Express")

})


app.get('/usuarios',(req:Request , res:Response)=>{
try {

    const listaUsuarios = usuarios
   res.status(200).send(listaUsuarios)

  
} catch (error) {
 res.status(400).end("Usuários não encontrados")
}


})



app.listen(3003 ,()=>{
    console.log("servidor de pé")

})