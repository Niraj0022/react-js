import { useState } from 'react'
import'./App.css'

function App() {
  
  //let counter = 15
  const [counter, setCounter]= useState(0)
  const addValue = () =>{
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>simple maths with react {counter}</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button 
      onClick={removeValue}
      >remove value</button>{" "}
      <p>final value: {" "}{counter} </p>
    </>
  )
}

export default App
