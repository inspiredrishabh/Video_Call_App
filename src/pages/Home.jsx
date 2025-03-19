import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [input, setInput] = useState('')
    let navigate = useNavigate()

    const handleJoin = () => {
        navigate(`/room/${input}`)
    }
  return (
    <div id='home'>
        <input type="text" placeholder='Enter Room ID' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleJoin}>Join Now</button>
    </div>
  )
}

export default Home