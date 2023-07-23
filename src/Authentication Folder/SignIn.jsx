import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const SignIn = (props) => {
  const {handleStatusFn} = props;
  //------------------------------------------ Local storage --------------------------


  let initialFormDb;
  
  if(localStorage.getItem("formData") === null){
    initialFormDb = []
  }
  else{
    initialFormDb = JSON.parse(localStorage.getItem("formData"))
  }


  const [formData , setFormData] = useState(initialFormDb)
  useEffect(()=>{
      localStorage.setItem("formData", JSON.stringify(formData))
  },[formData])
 
  //------------------------------------------ Local storage --------------------------
  //------------------------------------------ storing form data -----------------------
  const initialFormInputs = {
    userName : "",
    email : "",
    password : "",

  }

  const [formInputs , setFormInputs] = useState(initialFormInputs)

  const handleChangeFn = (e) => {
    const {name , value} = e.target;
    setFormInputs({...formInputs , [name] : value})
  }
  const handleSubmitFn = () => {
    setFormData([...formData , formInputs]);
    setFormInputs(initialFormInputs)

  }
  console.log(formInputs.email , formInputs.password , formInputs.userName)

  console.log(formData)



  //------------------------------------------ storing form data -----------------------
  return (
    <div>
      <h1>Sign in</h1>
      <input type="text" name="userName" value={formInputs.userName} onChange={handleChangeFn} placeholder="Username"/><br />
      <input type="text" name="email" value={formInputs.email} onChange={handleChangeFn} placeholder="Email"/><br />
      <input type="text" name="password" value={formInputs.password} onChange={handleChangeFn}  placeholder="Password"/><br/>
      <Button onClick={handleSubmitFn} variant="primary" type="submit">
        Signin
      </Button>
      <p>Already have an account <Button onClick={handleStatusFn} variant="primary" type="submit">
        Login
      </Button> </p>
    </div>
  );
};

export default SignIn;
