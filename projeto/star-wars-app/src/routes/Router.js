import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import CharacterDetailPage from "../CharacterDetailPage/CharacterDetailPage"
import CharacterListPage from "../CharacterListPage/CharacterListPage"


const Router =() => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<CharacterListPage/>}/>
          <Route path="/detail/:i" element ={<CharacterDetailPage/>}/>         
       </Routes>
    </BrowserRouter>
    
  )

}

export default Router