import React from 'react'
import SignInOutContainer from "../Container/Account"
import '../Style/Popup.css'
import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

const Icon=styled.div`


background: transparent;
font-size: 3rem;
cursor: pointer;

`;

const CloseIcon=styled(FaTimes)`
color:red;
position: relative;
top:-17rem;
left: 24rem;
z-index: 999;

`;
function Popup(props) {
    return (props.trigger)?
    (
        <div className="popup">
             <Icon onClick={()=>props.settrigger(false)}>
               <CloseIcon/>
           </Icon>
            <div className="popup-inner">
            <SignInOutContainer/>
  
            </div>
        </div>
     
    
):"";

    }


export default Popup
