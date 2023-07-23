import React, { useState } from 'react'
import VerifiedLogin from './VerifiedLogin';
import TempLogin from './TempLogin';

function Authentication() {

    const [status, setStatus] = useState(true);

    const toggleStatus = () => {
        setStatus(!status);
    }

  return (
    <>
      {
        !status ? <VerifiedLogin toggleStatus={toggleStatus}/> : <TempLogin toggleStatus={toggleStatus}/>
      }
    </>
  )
}

export default Authentication
