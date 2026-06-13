import { Fragment } from "react"
import Car from "./Car";
import { useState } from "react";

function App() {

 const state = useState("Hello world.sdsd....");

  const changeText = () => {
   state[1]("Hello world");
    
  };

  return(
    <>
         hellooo Arco u got this!
         <button onClick={changeText}>Click me!</button>
         <span id="text">{state[0]}</span>
        
      
     
    </>

  );
}

export default App;