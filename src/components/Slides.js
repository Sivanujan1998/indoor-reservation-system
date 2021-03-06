import React,{useEffect,useState,useRef,useContext} from 'react'
import styled,{css} from 'styled-components/macro'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowForward,IoArrowBack } from 'react-icons/io5';
import Court from '../pages/Court';
import { Router, Route, Link,Switch,Redirect,BrowserRouter} from 'react-router-dom'
import App, { loginstateglobal } from '../App';
import "../Style/Button.css"
import "../Style/Navbar.css"
import Home from '../pages/Home';
import { Component } from 'react';

const Slidesection=styled.section`
height:100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const Slidewrapper=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide=styled.div`
z-index:1;
width: 100%;
height: 100%;
`;
const HeroSlider=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
&::before{
    content: '';
    position: absolute;
    z-index:2;
    width: 100%;
    height: 100vh;
    bottom:0vh;
    left:0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%,
    );
}
`;
const HeroImage=styled.img`
position: absolute;
top:0;
left:0;
width: 100vw;
height: 100vh;
object-fit: cover;

`;

const HeroContent=styled.div`
position: relative;
margin-left: 15%;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100%-100px);
color:#fff;

h1{
    font-size: clamp(1rem,6vw,15rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-shadow: left;
    margin-bottom: 0.8rem;
}

p{
    margin-bottom: 1.2rem;
   font-size: clamp(1rem,8vw,2rem);
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
`;

const Arrow=styled(IoMdArrowRoundForward)`
margin-left:0.5rem ;
`;
const SliderButton=styled.div`
position: absolute;
bottom: 50px;
right:50px;
display:flex;
z-index:10;
`;
const arrowButtons=css`
width:50px;
height: 50px;
color:#fff;
cursor:pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover{
    background: #cd853f;
    transform: scale(1.05);
}
`;
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;



function Slides(props) {
    const loginContext=useContext(loginstateglobal)
const[current,setcurrent]=useState(0)
const len=props.slide.length;
const timeout=useRef(null);

useEffect(() => {
    const nextSlidehandle=()=>{
        setcurrent(current=>(current===len-1?0:current+1));
        //console.log(current)
    }

    timeout.current=setTimeout(nextSlidehandle,4000)



    return function(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
   }, [current,len])

const nextSlidehandle=()=>{
    if(timeout.current){
        clearTimeout(timeout.current)
    }

    setcurrent(current===len-1 ? 0: current+1);
    //console.log(current)
}

const backSlidehandle=()=>{
    if(timeout.current){
        clearTimeout(timeout.current)
    }

    setcurrent(current===0 ?len-1: current-1);
    //console.log(current)
}
if(!Array.isArray(props.slide) || props.slide.length<=0){
    return null
}

const courthandle=()=>{
    if(loginContext.login){
    loginContext.setcourt(true)
  
}
    else{
    loginContext.setpopup(true)
    
    }
}



    return (   

            <Slidesection>
             
                <Slidewrapper>
                {props.slide.map((slide,index)=>{
                    return(
                        <HeroSlide key={index}>
                            {index===current && (
                            <HeroSlider>
                                <HeroImage src={slide.Image} alt={slide.alt}/>
                                <HeroContent>
                               
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                
                                   <Button onClick={courthandle}  primary="true" 
                                   css={`
                                       max-width: 160px;
                                       `}>
                                   {slide.label}
                                   <Arrow/>          
                                   </Button> 
                                 
                    
                
                                </HeroContent>
                                </HeroSlider>
                                
                            )}
                          
                        </HeroSlide>
                    );
                })}
                <SliderButton>
                    
                    <PrevArrow onClick={backSlidehandle}/>
                    <NextArrow onClick={nextSlidehandle}/>
                </SliderButton>
              
                </Slidewrapper>
              
                            
               
            </Slidesection>
          
   
          
      
    );
};

export default Slides
