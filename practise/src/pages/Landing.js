import React from 'react';
import Navbar from '../components/Navbar';
// import mainimg from ".../public/images/main.jpg"
import styled from "styled-components";

const Landing = () => {
  return (
    <div>
      <Navbar/>
        <ImageContainer>
            <div>
       
            <h2>Kickstart Your Career</h2>
            <div></div>
            <h1>COUNSELA</h1>
            <a href="#">Know more</a>
            </div>
        </ImageContainer>
        <ImageContainer1>
            <div></div>
        </ImageContainer1>

      
    </div>
  )
}

export default Landing
const ImageContainer=styled.div`

/* position: absolute; */

width: 1794px;
height: 1100px;
left: 0px;
top: 0px;
/* height: 100vh;
width: 100vw; */
background-size: cover;
background-position: bottom;
background-image: url(https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400);
display :flex ;
align-items: center;
justify-content: center;

div{
    opacity: 0.75;
    margin-bottom: 10px;
    text-align: center;
    h2{
        font-size: 4vmin;
        opacity: 1;
    }
    div{
        width: 100px;
        height: 4px;
        background-color: black;
        margin: 10px auto;
        border-radius: 5px;
        opacity: 1;
    }
    h1{
        font-size: 7vmin;
        margin-top: 50px;
        margin-bottom: 30px;
        opacity: 1;
    }
    a{
        padding: 8px 15px;
        background-color: black;
        border-radius: 30px;
        color: whitesmoke;
        opacity: 1;
    }
}

    
`
const ImageContainer1 =styled.div`
width: 50%;
height:700px;
background-color: blanchedalmond;
padding: 40px;
div{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
    background-image: url(https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
}
`
