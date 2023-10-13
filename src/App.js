import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { element } from "prop-types";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData]=useState([]);

  const addData = () =>{
    setData([...data,{name,email}]);
    setName("");
    setEmail("");
  };

  const removeItem = () =>{
    data.splice(index,1);
  }
    
  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" value={name}  onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
          <TextField id="outlined-basic" value={email} onChange={(event) => setEmail(event.target.value)} label="Email" variant="outlined" />
          <Button onClick={addData} color="success" variant="contained">
            Add 
          </Button>
        </Stack>
      </div>
      <div className="data">
      <div className="data_val">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
        </div> 
    
       {
        data.map((element,index) => {
          return(
            <div key={index} className="data_val">
        <h4>{element.name}</h4>
        <h4>{element.email}</h4>
        <Stack>
        <Button onClick={() => removeItem(index)} color="error" variant="contained">
            Remove
          </Button>
          </Stack>
        </div> 
          )
        })
       }
      </div>
    </div>
  );
}

export default App;
