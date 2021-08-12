import { useState } from "react";
import InputNum from "./InputNum";
 function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount((c) => 0)
  }
  const inputNum = (number) => {
    let value = parseInt(number)
    setCount((c) => c + value)
  }
  
  return (
    <div className="App">
    <div className="container" id='mainContainer'>
     
 
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button> 
      <InputNum inputNum={inputNum}/>
      {/* <button onClick={Submit}>Submit</button> */}
      <p>{count}</p>
       </div>
    </div>
  );
}
export default App
