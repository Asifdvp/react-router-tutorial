import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const login = ()=>{
localStorage.setItem('user','test');
navigate('/dashboard')
    }
  return (
    <div className='login'>
<h2>Welcome to Login Page</h2>
<p>please Login </p>
<button onClick={login}>Login</button>

    </div>
  )
}

export default Login