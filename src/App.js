import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";



function App() {

  const[color , setColor]=useState(false)
    
  function colorChange(){
      setColor(isColor =>!isColor);
  }
  
  return (
      <div>
          <h1 style={{color : color ? 'red' :'white'}}>Style me!</h1>
          <button style={{fontSize:30}} onClick={colorChange}>Toggle style</button>
          <div>
    <Header />
            </div>
      </div>
  );
}

export default App;