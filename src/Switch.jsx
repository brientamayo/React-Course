import React from 'react'
import { useState } from 'react'

const Switch = () => {
    const [sw, setSw] = useState(true);
    const handleSwitch = () => {
        setSw(!sw);
    }
  return (
    <div>
        <h1>{sw ? 'Light' : 'Dark'}</h1>
      <input 
        type="text" 
        className='border rounded-md p-1'
        key={sw ? 'Light' : 'Dark'}/>
      <button 
        className='p-1 bg-emerald-500 text-white rounded-md'
        onClick={handleSwitch}>
        Switch
      </button>
    </div>
  )
}

export default Switch
