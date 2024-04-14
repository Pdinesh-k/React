import { useState } from 'react'

function App() {

  const [counter,setCounter] = useState(10);
  const addValue = () =>{
    setCounter(counter+1);
  }
   const decreaseValue = () => {
    setCounter(counter-1);
   }

  return (
    <>
      <h1>React practice of counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue}>Add value</button>{" "}
      <button onClick = {decreaseValue}>remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
