import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10);
  let [val,setVal] = useState("Maximum");
  let [visibility,setVisibility] = useState(true);

  const addValue = ()=>{
    if(counter < 20)
    {
      setCounter(counter+1);
      setVisibility(true);
    }
    if(counter == 19){
      setVal("Maximum");
      setVisibility(false);
    }
  }
  const removeValue = ()=>{
    if(counter > 0)
    {
      setCounter(counter-1);
      setVisibility(true);
    }
    if(counter == 1){
      setVal("Minimum");
      setVisibility(false);
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Count : {counter}</h3>
      <p hidden={visibility}>{val} value reached</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Deccrease</button>

    </>
  )
}

export default App
