import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function addValue() {
    return(
      counter = counter + 1,
      setCounter(counter)
    )
  }

  function subtractValue() {
    return(
      counter = counter - 1,
      setCounter(counter)
    )
  }

  function reset() {
    return(
      counter = 0,
      setCounter(counter)
    )
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={(reset)}>Reset</button>
      <button onClick={(subtractValue)}>Subtract</button>
      
      
    </>
  )
}

export default App
