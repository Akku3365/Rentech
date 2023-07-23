import React, { useId, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const {handleStatusFn} = props;

  const navigationFunck = useNavigate()

  const db = JSON.parse(localStorage.getItem("formData"));
  console.log(db, 'db')

  

  let initialInput = {
    email: "",
    password: ""
  }

  // let formSubmitvalues;

  const [userInput, setUserInput] = useState(initialInput);
  // const [dataSubmit, setDataSubmit] = useState([]);

  const handleLoginChange = (e) => {
      const {name, value} = e.target;
      setUserInput({...userInput, [name]: value});
  }

  const handleLoginSubmit = () => {
    // setDataSubmit([...dataSubmit, userInput]);
    // db.map((item)=> {
    //   if(item.email === userInput.email){
    //     console.log('success')
    //   }
    //   // console.log(item, 'item')
    // })
    let fd = db.filter((item) => item.email === userInput.email);
    if(fd[0].email === userInput.email && fd[0].password === userInput.password){
      navigationFunck("/dash")
      console.log('successfull')
    }

  }

  
  // console.log(userInput);
  // console.log(dataSubmit);

  //----------------------Taking userData-----------------------------------//
  return (
    <div className='container'>
      <h1>Login</h1>
      <input type="text"  name='email' value={userInput.email} onChange={handleLoginChange}  placeholder="Email"/><br />
      <input type="text"  name='password' value={userInput.password} onChange={handleLoginChange} placeholder="Password"/><br/>
      <Button variant="primary" type="submit" onClick={handleLoginSubmit}>
        Login
      </Button>
      <p>Don't have an account <Button onClick={handleStatusFn} variant="primary" type="submit">
        SignIn
      </Button> </p>
    </div>
  )
}

export default Login
