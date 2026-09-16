import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
 

  const DecrementFunction =() =>{
    setCount(count - 1);
  }


  const IncrementFunction =() =>{
    setCount(count +1);
  }

   return(


    <div>
      <h2>Count: {count}</h2>
      <button onClick={DecrementFunction} disabled={count < 1} >Decrement</button>
      <button onClick={IncrementFunction}>Increment</button>
    </div>

   )
}

export default App
