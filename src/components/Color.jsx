import React, { useState } from 'react'

const Color = () => {
    const [color, setColor] = useState('green');
  return (
    <h1>My favourite Color is {color} <span style={{backgroundColor: 'green', color: 'green', padding: '.5rem', margin: '.2rem'}}>!!!!</span></h1>
  )
}

export default Color;