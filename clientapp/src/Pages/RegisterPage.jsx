import React, { useState } from 'react'
// import Navbar from '../component/Navbar/Navbar'
import RegNavBar from './RegNavBar';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate = useNavigate(); 

  
    const [username , SetUsername] = useState("");
    const [password , SetPassword] = useState("");
     async function register(e){
    
      e.preventDefault();
      const responce = await fetch("http://localhost:8000/register" ,{
      method: "POST",
      body : JSON.stringify({username , password}),
      headers : {'Content-Type':'application/json'},
      })
      if(responce.status === 200){
        alert("Registration Successful")
        navigate('/login'); 

      }else{
        alert("Registration Failed")
      }
  
     }
  return (
    <>
          <main className="login-main main">
      <RegNavBar />
      <div className="main">
      <h1 className='text-center mt-4'>Register</h1>
      <form className='register' >
        <div class="mb-3">
          <input type="text" value={username}  onChange={(e) => {SetUsername(e.target.value)}} class="form-control" placeholder='Username'/>
        </div>
        <div class="mb-3">
          <input type="password" value={password}  onChange={(e) => {SetPassword(e.target.value)}} class="form-control" placeholder='Password' />
        </div>
        <button type="submit" class="btn btn-success mt-2" onClick={register}>Register</button>
      </form>
      </div>
    </main>
    </>
  )
}

export default RegisterPage
