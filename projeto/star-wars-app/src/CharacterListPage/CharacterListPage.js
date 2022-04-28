import React, { useState } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../constants/urls"
import {useEffect, useState} from 'react'


const [characterList, setCharacterList] =useState([])

const CharacterListPage= () => {
const navigate = useNavigate ()

const goToDetailPage= () => {
  navigate ('/CharacterDetailPage')
 }
   
  const getCharacterList= () => {
    axios.get= (`${BASE_URL}/people`)
    .then ((res) => console.log (res))
    .catch((err) => console.log (err)) 
  
  }

  const listPage = () => {
   setCharacterList (characterList)

  }

  
  useEffect (()=> {
    getCharacterList ()
  
  },[])
  

  return (
    <div>
      <h1>Lista Page Star Wars</h1>
      <button onClick ={goToDetailPage}>Ir para Detalhes</button>
      {characterList}
      {listPage}
    </div>
  )
}

export default CharacterListPage;
