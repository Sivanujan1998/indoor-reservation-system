import React,{useEffect} from 'react';
import styled,{css} from 'styled-components/macro';
import {BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'
import { menuData } from '../data/Menudata';
import ScrollToTop from './ScrollToTop';
import ScrollToMiddle from './ScrollToMiddle';

import '../Style/Navbar.css'

//Bars

import Bars from"../images/bars.svg";
import Blog from '../pages/Blog';
import Review from '../pages/Review';
import Home from '../pages/Home';



const Nav = styled.nav`
    display:flex;
    height: 60px;
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;

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

    return (
        <Router>
        <div>

            <Nav id="navbar">
                <Logo to="/home">Indoor</Logo>
                <MenuBars onClick={props.toggle}/>
                <NavMenu>

                    <Redirect to="/home" />

                    {menuData.map((item,index)=>(
                            
                     <NavMenuLinks exact activeClassname="active" to={item.link} key={index}>
                        {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
               
                <NavBtn>
                    <button className="acc-btn" onClick={()=>props.popupaccount(true)} >Account</button>
                </NavBtn>
              
            </Nav>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/home"  component={Home}/>
                <Route path="/Review"  component={Review}/>
                <Route path="/Blog"  component={Blog}/>
             </Switch>
             </div>
    </Router>
           
         
           

 
  
    )
    
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("navbar").style.backgroundColor = "orange";
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
  }
}



export default Navbar
