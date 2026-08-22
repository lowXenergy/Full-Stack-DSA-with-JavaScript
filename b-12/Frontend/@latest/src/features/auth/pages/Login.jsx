import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router' 
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
import {useNavigate} from 'react-router'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {handleLogin,loading}=useAuth()
    const navigate = useNavigate()

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    function handleSubmit(e) {
        e.preventDefault()

        handleLogin(username,password) 
        .then(res=>{
            console.log(res)
            navigate("/")
        })
        
        // axios.post("http://localhost:3000/api/auth/login",{//UI LAYER NEVER DIRECTLY COMMUNICATE WITH BACKEND
        //     username,
        //     password
        // },{
        //     withCredentials:true
        // })
        // .then(
        //     res=>{
        //         console.log(res.data)
        //     }
        // )
    }
  return (
     <main>
        <div className='form-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{setUsername(e.target.value)}}
                type='text' 
                name='username'
                placeholder='Enter username'/>
                <input 
                onInput={(e)=>{setPassword(e.target.value)}}
                type="password"
                name='password' 
                placeholder='Enter password' />
                <button type='submit'>Login</button>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </form>
        </div>
     </main>
  )
}

export default Login