import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigateFunction = useNavigate();
  const cliickFn = () =>{
    navigateFunction('/')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={ cliickFn} >Home</button>
    </div>
  )
}

export default Dashboard
