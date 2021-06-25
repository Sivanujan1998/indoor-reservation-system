import React from 'react';
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../data/Menudata';
import { Button } from './Button';
//Bars

import Bars from"../images/bars.svg";

/*
import {FaBars} from "react-icons/fa";*/

const Nav = styled.nav`
    display:flex;
    height: 60px;
   // background: red;
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
    padding:0 2.5rem;
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
    margin-right: -48px;

    @media screen and (max-width:768px){
        display: none;
    }

    `;

const NavMenuLinks=styled(Link)`
${NavLink}`;

const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px){
        display: none;
    }
`;

function Navbar() {
    return (
        <div>
            <Nav>
                <Logo to="/dd">Indoor</Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item,index)=>(
                        <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary="true">Contact Us</Button>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
