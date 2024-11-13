import React from "react";
import myImage from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src= {myImage} alt="Logo showing a money"></img> 
      <h1>Investment Calculator</h1>
    </header>
  );
  }