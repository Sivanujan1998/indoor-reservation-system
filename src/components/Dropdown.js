import React,{useContext} from 'react'
import styled from 'styled-components'
import { menuData } from '../data/Menudata'
import Blog from '../pages/Blog'
import Review from '../pages/Review'
import Home from '../pages/Home'

import {Link, Router, Route , Switch} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import '../Style/Navbar.css'  
import ScrollToTop from './ScrollToTop'
import { loginstateglobal } from '../App';


const Dropdowncontainer=styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background:#cd853f ;
display: grid;
align-items: center;
top: 0;
left:0;
transition: 0.3s ease-in-out;
opacity:${({isopen})=>(isopen? '1':'0')};
top:${({isopen})=>(isopen? '0':'-100%')};


`;

const Icon=styled.div`
position: absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const CloseIcon=styled(FaTimes)`
color:#000d1a;
`;
const DropDownWrapper=styled.div``;

const DropdownMenu=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4,80px);
text-align: center;
margin-bottom: 4rem;

@media screen and(max-width:400px){
    grid-template-rows: repeat(4,60px);
}
`;
const DropdownLink=styled(Link)`
display:flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
color: #000d1a;
}

`;
const Btnwrap=styled.div`
display:flex;
justify-content: center;
`;

function Dropdown(props){
    const loginContext=useContext(loginstateglobal)
    return(
    

       <div>

       <Dropdowncontainer isopen={props.isopen} onClick={props.toggle}>
   <Icon onClick={props.toggle}>
               <CloseIcon/>
           </Icon>
           <DropDownWrapper>
               <DropdownMenu>
                   {menuData.map((item,index)=>(
                       <DropdownLink to={item.link} key={index}>
                           {item.title}
                       </DropdownLink>
                   ))}
               </DropdownMenu>
               <Btnwrap>{
                    (loginContext.login)?
                   <button className="acc-btn" onClick={()=>props.popupaccount(true)} >{ loginContext.user.email  }</button>
                   :  <button className="acc-btn" onClick={()=>props.popupaccount(true)} >Account</button>
                    
                }
             
               </Btnwrap>
           </DropDownWrapper>

       
       </Dropdowncontainer>
  

       
   
        </div>
     
    )
}

      export default Dropdown

