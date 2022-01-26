import React from 'react';
import { useState } from 'react';
import "./login.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LOGIN = '' ;

const Login = ({setLoginUser}) => {

    const history= useHistory();

    const [user,setUser] = useState({
        
        email:"",
        password:"",
       
    })
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const login = () =>{
       
           
            axios.post(`${LOGIN}/login`,user)
            .then(res =>{
                 alert(res.data.message)
                 setLoginUser(res.data.user)
                 history.push('/');
            } 
                )
                
            
        }
        
        

    return (
        <>
       
        <div className='login'>
        {console.log("User",user)}
        <h1>Login</h1>
        <input type="text" name='email' value={user.email} placeholder='Enter Your Email' onChange={(e)=>handleChange(e)}/>
        <input type="password" name='password' value={user.password} placeholder='Enter Password' onChange={(e)=>handleChange(e)}/>
        <div class='checkboxOne'>
        
        </div>
        <button onClick={()=>login()}>Login</button> <br />
        <button onClick={()=>history.push('/signup')}>Sign Up</button>
        </div>
        </>
    )
}


export default Login;
