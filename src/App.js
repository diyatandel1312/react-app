import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';



function App() {
const[num ,SetNum]=useState(1);
  
function inc(){
  SetNum(num+1);
}

function dec(){
  if(num < 1){
    SetNum(0);
  }else {
    SetNum(num - 1); 
  }
};

  return (
    <div className='App'>
      <Header />  
       <div className='main'>
      <h1 className='heading'>{num}</h1>
   
        <div className='buttons'> 
       <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
