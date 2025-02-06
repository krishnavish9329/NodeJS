import { useState, useEffect } from 'react'
import './App.css'
import Socket from './Component/Socket'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Socket></Socket>
    </>
  )
}

export default App
