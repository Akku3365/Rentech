import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function VerifiedLogin() {

    const navigation = useNavigate();

    let varInitialInput = {
        email: ""
    }

    const [verUserInput, setVarUserInput] = useState(varInitialInput);

    const varHandleChange = (e) => {
        const {name, value} = e.target;
        setVarUserInput({...verUserInput, [name] : value})
        
        
    }
    // console.log(db, 'db')
    
    let db = JSON.parse(localStorage.getItem("userData"))
    const handleSubmitFn = () => {
        
        db.map((item) => {
            if(item.email === verUserInput.username ){
                navigation('/dash')
            }
            else{
                console.log('not matched')
            }
        })
        // setVarUserInput(varInitialInput)
    }

    // console.log(verUserInput)

  return (
    <>
      <h1>Verifed User Login</h1>
      <input type='email' name='email' value={verUserInput.email} onChange={varHandleChange} placeholder='verified email' ></input>
      <br/>
      <button onClick={handleSubmitFn} >Submit</button>
    </>
  )
}

export default VerifiedLogin
