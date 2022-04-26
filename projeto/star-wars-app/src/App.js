import React from "react";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";
// import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Router from "./routes/Router";



const App= () => {
  return (
    <div>
      {/* <h1>Star Wars</h1> */}
      <Router/>
    </div>
  )
}

export default App;
