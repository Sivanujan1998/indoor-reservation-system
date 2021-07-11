import React,{useContext} from 'react';
import styled,{css} from 'styled-components/macro';
import {BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'
import { menuData } from '../data/Menudata';
import ScrollToTop from './ScrollToTop';
import ScrollToMiddle from './ScrollToMiddle';
import "../Style/Navbar.css"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Style/Button.css'
import {RiAccountCircleLine} from "react-icons/ri"

//Bars

import Bars from"../images/bars.svg";
import Blog from '../pages/Blog';
import Review from '../pages/Review';
import Home from '../pages/Home';
import App, { loginstateglobal } from '../App';
import Routing from './Routing';
import Personaldetails from './Personaldetails';



const Nav = styled.nav`
    display:flex;
    height: 60px;
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:999;
    position:fixed;
    width:100%;
    background-color:rgba(0, 3, 0, 0.6); ;
 
    `;
const NavLink=css`
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 1.5rem 0  ;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`


const Logo=styled(Link)`
    ${NavLink}
    font-style:italic;
    `

const MenuBars=styled.i`
display: none;
@media screen and (max-width:768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        border-color:white;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%,20%);
    
      
    }

`;

const NavMenu=styled.div`
    display:flex;
    align-items:center;
    
    margin-left: 16%;

    @media screen and (max-width:768px){
        display: none;
    }

    `;

const NavMenuLinks=styled(Link)`
${NavLink}`;

const NavBtn=styled.div`
display:flex;
align-items:center;
margin-left: 1%;


@media screen and (max-width:768px){
        display: none;
    }
`;

function Navbar(props) {
    const loginContext=useContext(loginstateglobal)
    return (
        <Router>
        <div>

            <Nav id="navbar">
            
                <Logo to="/" onClick={()=>{loginContext.setcourt(false)}}><h1>PLAY<sub>24/7</sub></h1></Logo>
                <MenuBars onClick={props.toggle}/>

                
                <NavMenu>

                   

                    {menuData.map((item,index)=>(
                            
                     <NavMenuLinks  to={item.link} onClick={()=>{loginContext.setcourt(false)}} key={index}>
                        {item.title}
                        
                        </NavMenuLinks>
                    ))}
                </NavMenu>
               
                <NavBtn>
                {
                   (loginContext.login)?
                   <Popup  trigger={<button className="acc-btn" ><RiAccountCircleLine size={25} />{ loginContext.user.name}</button>} position="left"> 
                   <div ><div className="iconpersonal">
                   <center><RiAccountCircleLine size={25} /></center>
                       <h1>Hi {loginContext.user.name}.. </h1>
                       <h3>Email:-{loginContext.user.email}</h3>
                       <h3>Tel-No:-{loginContext.user.phonenumber}</h3>
                       <h3>Gender:-{loginContext.user.gender}</h3>
                      
 
                     <center>  <button onClick={()=>{
                           loginContext.setlogin(false)
                           loginContext.setcourt(false)
                           loginContext.setuser({})
                           loginContext.setemail([])
                           NotificationManager.success('Logout Process', 'Sucessfully Done');
                       }}>Logout</button></center>
                       </div>
                   </div>
                   </Popup>
                   :<button className="acc-btn" onClick={()=>props.popupaccount(true)} >Account</button>
                    
                }
                   
                </NavBtn>
            
               
            </Nav>
           
            <ScrollToTop/>
            <Routing/>
            
             </div>
             <NotificationContainer/>
    </Router>
           
         
           

 
  
    )
    
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {

    document.getElementById("navbar").style.backgroundColor = "orange";
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
  }
}



export default Navbar
