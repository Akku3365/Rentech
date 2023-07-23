import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dash() {

  const navigationF = useNavigate();

  const backToHome = () => {
     navigationF('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={backToHome} >Back</button>
    </div>
  )
}

export default Dash
