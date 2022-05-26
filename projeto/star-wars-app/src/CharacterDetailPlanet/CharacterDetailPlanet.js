import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { Fundo } from "./style"


const CharacterDetailPlanet = () => {

  const [planet, setPlanet] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    getPlanet()


  }, [])

  const getPlanet = () => {
    axios.get(`${BASE_URL}/planets/`)
      .then((res) => {
        setPlanet(res.data.results)
      })
      .catch((err) => { console.log(err) })

  }
  console.log(planet)

  const goToList = () => {
    navigate("/")

  }
    const listPlanet = planet && planet.map((person, i) => {
        return (
        <div onClick={() => goToList()}>
          <p key={i}>{person.name}</p>
        </div>)

    })

    return (

      <Fundo>
        <h1>Planetas</h1>
          <div>
          {listPlanet}
          </div>
       </Fundo>
    )

  }



export default CharacterDetailPlanet