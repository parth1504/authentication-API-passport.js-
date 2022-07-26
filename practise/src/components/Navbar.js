import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = () => {
    return ( 
        <Container>
            <ul className="links">
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </Container>
     );
}
 


const Container=styled.div`

width: 100%;
position: absolute;
top: 0;
left: 0;
padding: 20px;
  display:flex;
align-items: center;
  justify-content: space-between;


ul{
 
  display:flex;
  align-items: center;
  transform: all 0.5s ease;
  margin: auto;

  li{
      opacity: 1;
      list-style-type: none;
      color: black;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      padding: 0 10px;
      
      cursor: pointer;
      float: right;
      margin: 0 30px;
      /* margin-left: 50px; */
      display:flex;
      justify-content: center;
      a{
            position: relative;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            color: black;
            font-weight: bold;
            font-size: larger;
            
            

            &:hover {
            color: #ea4f4c;
            }
        }
    }
}

`;
export default Navbar;