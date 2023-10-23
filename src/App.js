import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/restaurants" element ={<RestaurantList />} />
      </Routes>
    </Router>
  );
}

export default App;
