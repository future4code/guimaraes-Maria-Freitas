import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";



const Router =() => {
 return (
    <BrowserRouter>
    <Routes>
      <Route index element ={<HomePage/>}/>
      <Route path="/list"element={<ListTripsPage/>}/>
      <Route path="/aplication" element={<ApplicationFormPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/admin"element= {<AdminHomePage/>}/>
      <Route exact path="/trip" element= {<TripDetailsPage/>}/>
      <Route path="create" element ={<CreateTripPage/>}/>
    </Routes>
  </BrowserRouter>

 )

}

export default Router