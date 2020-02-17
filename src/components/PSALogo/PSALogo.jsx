import React from "react";
import logo from './imgs/logo.png'
import './css/PSALogo.css';

export default function PSALogo(){
    return(
        <>
            <img className="logo" src={logo} alt="Logo" />;
        </>
    );
}