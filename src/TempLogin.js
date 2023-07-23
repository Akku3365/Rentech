import React, { useEffect, useState } from "react";

function TempLogin(props) {

  const {toggleStatus} = props;

    let initialDb ;

    if(localStorage.getItem("userData") === null){
        initialDb = [];
    }
    else{
        initialDb = JSON.parse(localStorage.getItem("userData"))
    }

    const [userData , setUserdata] = useState(initialDb);        // State for storing the data to localstorage

    useEffect(()=>{
        localStorage.setItem("userData" , JSON.stringify(userData))
    },[userData]);

    


  let initialUserInput = {
    username: "",
    // email: "",
    // password: "",
  };
  
  const [userInput, setUserInput] = useState(initialUserInput);  // State for storing the User Inputs

  const handleChange = (e) => {
    const { name, value } = e.target;                          // Function for storing the input for every change event
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = () => {
    setUserdata([...userData , userInput])                   // Function for submitting the UserData
    setUserInput(initialUserInput)
  }

  // console.log(userInput);                     // console for user inputs
  // console.log(userData);                      // console for submitted data


  return (
    <>
      <h1>TempLogin</h1>
      <input
        type="text"
        name="username"
        value={userInput.username}
        placeholder="Email"
        onChange={handleChange}
      ></input>
      
      <br />
      <button onClick={handleSubmit} >Submit</button>
      <br/>
      <p>Don't have an account <button onClick={toggleStatus} >Sign in</button></p>
    </>
  );
}

export default TempLogin;
