import React from 'react'
import Movies from '../pages/Movies';
import Login from '../pages/Login';
import Favorite from '../pages/Favorite';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
    return(
  
    <nav>
          
    <ul>
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
      <Link to="/Movies">Movies</Link>
      </li>
      <li>
      <Link to="/Favorite">Favorite</Link>
      </li>
    </ul>
  </nav>


);
}
