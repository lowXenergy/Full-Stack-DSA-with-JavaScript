import React from 'react';
import { useState } from "react";   
import "../style/form.scss";
import { Link } from 'react-router';
import axios from 'axios';

const register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()

        // axios.post("http://localhost:3000/api/auth/register",{//UI LAYER NEVER DIRECTLY COMMUNICATE WITH BACKEND
        //     username,
        //     email,
        //     password
        // },{
        //     withCredentials:true
        // })
        // .then(res=>{
        //     console.log(res.data)
        // })

        
    }

  return (
    <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter username' />
                    <input
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="text"
                        name='email'
                        placeholder='Enter email' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter password' />
                    <button>Register</button>
                </form>

                <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
            </div>
        </main>
  )
}

export default register