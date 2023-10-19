import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";



function App() {

  const[isDeleting,setIsDeleting] = useState(false);

  function deletedHandler(){
    setIsDeleting(true);
  }

  function proceedHandler(){
    setIsDeleting(false);
  }
  
  let Warning;


  if(isDeleting){
    Warning = (
      <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button  onClick={proceedHandler} >Proceed</button>
   </div>
    )
  }
  return(
    <div>
      <Header />

      <div>
        
        <div id="delete">
        <button  onClick={deletedHandler}>Delete</button>
        </div>
        {Warning}
        </div>
      </div>
  )
}

export default App;