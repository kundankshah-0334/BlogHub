import React, { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Link} from "react-router-dom"

function Navbar() {


  const [username , SetUsername] = useState(null);
  // useEffect(() => {
  //   fetch('https://blog-hub-api.vercel.app/profile', {
  //     credentials : 'include',
  //   }).then(responce => {
  //     responce.json().then(userInfo => {
  //       SetUsername(userInfo.username);
  //     })
  //   })
  // } , [])

  useEffect(() => {
    fetch('https://blog-hub-api.vercel.app/profile', {
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(userInfo => {
        setUsername(userInfo.username);
      })
      .catch(error => {
        console.log(error);
        // Handle the error accordingly, e.g., show an error message to the user
      });
  }, []);
 

  function logout () {
    fetch('https://blog-hub-api.vercel.app/logout' , {
      method: 'POST',
      credentials : 'include',
    });
    SetUsername(null);
  }

  return (
    <>
    <div className='main'>
      <nav class="navbar navbar-expand-lg  background-navbar-change">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">BlogHub</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        { username && (
                          <>
                            <li class="nav-item">
                            <Link class="nav-link" to="/create">Create New Post</Link>
                            </li>

                            <li class="nav-item">
                            <Link class="nav-link" onClick={logout} >Logout</Link>
                            </li>
                          </>
                        )}
                        { !username && (
                          <>
                            <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                            </li>

                            <li class="nav-item">
                            <Link class="nav-link" to="register">Register</Link>
                            </li>
                          </>
                          )
                        }
                    </ul>
                </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
