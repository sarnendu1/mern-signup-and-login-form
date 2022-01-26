import React, { useState } from 'react';
import "./signup.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const SIGNUP =process.env.SIGNUPPAGE || 'http://localhost:3001' ;

const SignUp = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
    })
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const history= useHistory();

    const signUp = async() =>{
       
        const { name,email,password,reEnterPassword} = user;
        if(name && email && (password===reEnterPassword)){
            
            axios.post(`${SIGNUP}/signup`,user)
            .then(res => {

                alert(res.data);
                history.push('/login')
            }
                )
        }
        else{
            alert('invalid')
        }
    }

    return (
        <>
        
        <div className='signup'>
        <h1>Sign Up</h1>
        {console.log("User",user)}
        <input type="text" name='name' value={user.name} placeholder='Enter Your Full Name' onChange={(e)=>handleChange(e)} />
        <input type="text" name='email' value={user.email} placeholder='Enter Your Email' onChange={(e)=>handleChange(e)}/>
        <input type="password" name='password' value={user.password} placeholder='Enter Password' onChange={(e)=>handleChange(e)}/>
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Enter Password' onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>signUp()}>SignUP</button>
        <button onClick={()=>history.push('/login')}>Login</button>
        </div>
        </>
    )
}

export default SignUp;
