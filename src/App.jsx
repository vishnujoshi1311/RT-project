import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <div className='Hero'>
           <ul>
            <li>HOme</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Help?</li>
            <li>Cart</li>
           </ul>        
      </div>
      <div><a href="">THE HEITAGE</a></div>
      <div>dgsjdgeiwygdu</div>
    </h1>
    
  )
  
}

export default App
