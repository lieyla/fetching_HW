
import logo from './logo.svg';
import './App.css';
import './Container1.css';
import React, {useState} from 'react';


function App(){
const[firstName, setFirstName]=useState("")
const[lastName, setLastName]=useState ("")
function submit(e){
  e.preventDefault()
  console.log("firstName:" , firstName )
  console.log("lastName:" , lastName)
}

    return(
        <div className="Container1">
            <form>
            <input type="text" placeholder="enter firstName" onChange={e=> setFirstName(e.target.value)} />
            <input type="text" placeholder="enter lastName" onChange={e=> setLastName(e.target.value)} />
            <input type="submit" onClick={(e) =>submit(e)}/>
            <h2>Hooks in Hooks</h2>

            </form>
        </div>
    )
}

export default App;















