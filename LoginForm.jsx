import React from "react";
import "./LoginForm.css";
import Navbar from "../components/Navbar";

const LoginForm = () =>{
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

        </div>
    )
}
export default LoginForm;