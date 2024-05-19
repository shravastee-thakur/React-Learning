
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [hrs, setHrs] = useState(0)
  const [run, setRun] = useState(false)



useEffect(() => {
  let id = null;
  if (run) {
    id = setInterval(() => {
      setSec((previousSec) => {
        if(previousSec === 59){
          setMin((previousMin) => {
            if(previousMin === 59){
              setHrs((previousHrs) => previousHrs + 1)
              return 0;
            }
            else{
              return previousMin + 1;
            }
          })
          return 0;
        }
        
        else {
          return previousSec + 1;
        }
      })
    }, 1000)
  }
  

  return() => clearInterval(id)
}, [run])

const start = () => {
  setRun(true)
}

const stop = () => {
  setRun(false)
}

const reset = () => {
  setSec(0)
  setMin(0)
  setHrs(0)
}

  return (
    <div className="app">
      <h1>{hrs}:{min}:{sec}</h1>
      <button className='btn' onClick={start}>Start</button>
      <button className='btn' onClick={stop}>Stop</button> 
      <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default App
