import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
// import { registerRoute } from '../utils/APIRoutes';
import Login from './Login';

function Register() {
// const navigate=useNavigate()
const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    cpassword:""
});

// useEffect(()=>{
//     if(localStorage.getItem('chat-app-user')){
//         navigate('/');
//     }
// },[]);
const handleSubmit=async (event)=>{
    event.preventDefault();
    // if(handleValidation()){
    //     console.log("in validation",registerRoute);
    //     const {username,email,password}=values;
    //     const { data } = await axios.post(registerRoute,{
    //         username,
    //         email,
    //         password
    //     });
    //     if (data.status===false){
    //         toast.error(data.msg,toastOptions);
    //     }
    //     if(data.status===true){
    //         localStorage.setItem('chat-app-user',JSON.stringify(data.user));
    //         navigate('/');
    //     }
        
    // }
};

const toastOptions={
    position: 'bottom-right',
    autoClose:8000,
    pauseOnHover:true,
    draggable: true,
    theme:"dark"
};
const handleValidation=()=>{
    const {username,email,password,cpassword}=values;
    if(password!==cpassword){
        toast.error("passwords dont match",toastOptions);
        return false;
    }else if(username.length<3){
        toast.error("username should be more than 3 charachters",toastOptions);
        return false;
    }
    else if(password.length<8){
        toast.error("password should be more than 8 charachters",toastOptions);
        return false;
    }
    else if(email===""){
        toast.error("email is required",toastOptions);
        return false;
    }
    return true;
};

const handleChange=(event)=>{
    setValues({...values,[event.target.name]:event.target.value});
     
};

  return (
    <div>
    <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
                <h1>COUNSELLING</h1>
            </div>
            <input type="text"
                   placeholder='Username'
                   name='username' 
                   onChange={(e)=>handleChange(e)}
            />
            <input type="text"
                   placeholder='Email'
                   name='email' 
                   onChange={(e)=>handleChange(e)}
            />
            <input type="text"
                   placeholder='Password'
                   name='password' 
                   onChange={(e)=>handleChange(e)}
            />
            <input type="text"
                   placeholder='Confirm Password'
                   name='cpassword' 
                   onChange={(e)=>handleChange(e)}
            />
            <button type='submit'>Create User</button>
            <span>Already have a account ?
                {/* <Link to="/login">Login</Link> */}
            </span>
        </form>
    </FormContainer>
    <ToastContainer>

    </ToastContainer>
    </div>
  )
}

const FormContainer=styled.div`
    background-color: black;
    max-width: 500px;
    min-height: 500px;
    margin: auto;
    vertical-align: middle;
    padding: 70px;
    display: flex;
    color: #d6d627;
    

   form{
    background-color: #000000;
    align-items: center;
    input{
        width: 80%;
        padding: 10px;
        margin: 8px ;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid blueviolet;
        
    }
    button{
        background-color: #ca186e;
        border: 5px solid #36bf31;
        font-weight: bold;
        
       
        margin: 15px;
        padding: 8px;
        width: 120px;
        
    }
   }
`;

export default Register
