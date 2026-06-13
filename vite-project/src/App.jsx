import { Fragment } from "react"
import Car from "./Car";

function App() {

  return(
    <>
         hellooo Arco u got this!
      <Car make="mvm" model="carmy" year={2022} color="red" price="$25,000" />
      <Car make="honda" model="civic" year={2023} color="blue" price="$23,000" />
    </>

  );
}

export default App;