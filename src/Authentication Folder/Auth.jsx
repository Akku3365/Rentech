import React, { useState } from 'react'
import Login from './Login'
import SignIn from './SignIn'

const Auth = () => {
    const [status , setStatus] = useState(false);
    const handleStatusFn = () => {
        setStatus(!status)
    }
  return (
    <div>
        {
            !status ?   <Login handleStatusFn={handleStatusFn} /> :  <SignIn handleStatusFn={handleStatusFn}/>
        }
     
     
    </div>
  )
}

export default Auth
