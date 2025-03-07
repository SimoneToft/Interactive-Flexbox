import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flexbox from './Flexbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Flexbox></Flexbox>
        </div>
    </>
  )
}

export default App
