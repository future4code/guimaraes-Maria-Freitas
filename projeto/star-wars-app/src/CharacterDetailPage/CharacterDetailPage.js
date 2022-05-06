import axios from "axios"
import React, { useEffect, useState, useParams} from "react"
import {useNavigate} from 'react-router-dom'



const CharacterDetailPage= () => {
 const navigate = useNavigate ()

 const goToListPage= () => {
  navigate ('/')
 }

const [details, setDetails] = useState ({}) 
const params = useParams ()

useEffect (() => {
  getDetail ()

}, [])

console.log (params)

const getDetail= () => {
 axios.get (`https://swapi.dev/api/people/${params.i}`)
  .then((res) => {
    setDetails(res.data)
  })

  .catch((err)=> {console.log (err)})
}

 return (

    <div>
      <h1>Detalhes Star Wars Página: {details.name}</h1>
      <button onClick={goToListPage}/>
    
    </div>

  )

  }


export default CharacterDetailPage;
