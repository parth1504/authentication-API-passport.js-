import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link ,useNavigate} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
// import { loginRoute } from '../utils/APIRoutes';


function Login() {
// const navigate=useNavigate()
const [values,setValues]=useState({
    username:"",
    password:"",
    
});

const toastOptions={
    position: 'bottom-right',
    autoClose:8000,
    pauseOnHover:true,
    draggable: true,
    theme:"dark"
};

// useEffect(()=>{
//     if(localStorage.getItem('chat-app-user')){
//         navigate('/');
//     }
// },[]);

const handleSubmit=async (event)=>{
    event.preventDefault();
    // if(handleValidation()){
    //     console.log("in validation",loginRoute);
    //     const {username,password}=values;
    //     const { data } = await axios.post(loginRoute,{
    //         username,
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


const handleValidation=()=>{
    const {username,password}=values;
    if(password===""){
        toast.error("Email and password is required",toastOptions);
        return false;
    }else if(username.length===""){
        toast.error("Email and password is required",toastOptions);
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
                   min="3"
            />
            <input type="text"
                   placeholder='Password'
                   name='password' 
                   onChange={(e)=>handleChange(e)}
            />
            <button type='submit'>LOGIN</button>
            <span>Dont have an account ?
                {/* <Link to="/register">Register</Link> */}
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

export default Login
