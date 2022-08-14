import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Login from './pages/Login';
import Favorite from './pages/Favorite';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MovieList from './components/MovieList';
function App() {

return(
  <Router>
    <div>

      <Routes>
          <Route element={<Login/>} path="/Login"/>
          <Route element={<Movies/>} path="/Movies"/>
          <Route element={<Favorite/>} path="/Favorite"/>
        </Routes>
    </div>
    

  <div className="App">
    <Navbar/>
  </div>
  
  </Router>
)
}
export default App;
