import React,{useContext} from 'react'
import styled from 'styled-components'
import { menuData } from '../data/Menudata'
import {RiAccountCircleLine} from "react-icons/ri"
import {BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'
import "../Style/Navbar.css"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {FaTimes} from 'react-icons/fa'
import '../Style/Button.css'  
import ScrollToTop from './ScrollToTop'
import { loginstateglobal } from '../App';
import Home from '../pages/Home'
import Review from '../pages/Review'
import Blog from '../pages/Blog'
import Navbar from './Navbar'
import Routing from './Routing'


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
<Router>
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
                    <Popup  trigger={<button className="acc-btn" ><RiAccountCircleLine size={25} />{ loginContext.user.name}</button>} position="right"> 
                    <div ><div className="iconpersonal2">
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
                   :  <button className="acc-btn" onClick={()=>props.popupaccount(true)} >Account</button>
                    
                }
             
               </Btnwrap>
           </DropDownWrapper>

       <NotificationContainer/>
       </Dropdowncontainer>

      {/* <Routing/>*/}
   
        </div>

    </Router>
     
    )
}

      export default Dropdown

