import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('green')

  const changeColor = (color) =>{
    setColor(color)
  }

  return (
    <>
      <div className=' relative w-full h-screen flex justify-between items-center'>
        <div className = 'absolute left-0 w-1/2 h-full'style={{background : 'linear-gradient(to bottom right , purple , blue)'}}></div>
        <div className = 'absolute right-0 w-1/2 h-full bg-gradient-to-tr'style={{background : 'linear-gradient(to bottom right,black,aqua)'}}></div>
        <div className = 'absolute left-0'>
            <button onClick = {() => changeColor('red')}className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'red'}}>Red</button>
            </div>
          <div className = 'absolute right-0'>
            <button onClick = {() => changeColor('black')}className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'black'}}>black</button>
            </div>
            <div className='w-full h-full bg-black' style={{backgroundColor:color}}></div>
        </div>
    </>
  )
}

export default App
