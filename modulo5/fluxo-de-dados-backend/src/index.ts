import express from "express";
import cors from "cors";
import { Request, Response} from "express";



const app = express()

app.use(express.json())
app.use(cors())

app.get('/new/product',(req:Request , res:Response)=>{

    try{
      const id = req.body.id
      const name = req.body.name
      const price = req.body.price
   
      List.push({
       id: id,
       name: name,
       price: price
      })
   
      res.status(200).send(List)
   
    }
     catch{
         res.status(400).send('produto não inserido')
     }
   
   })


app.get('/test', (req: Request, res: Response) => {
   res.status(200).send("API ESTÁ FUNCIONANDO")
})


app.listen(3003,()=> {
console.log("servidor de pé")


})