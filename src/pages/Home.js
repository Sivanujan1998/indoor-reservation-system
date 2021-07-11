
import GlobalStyle from "../globalstyle";
import Slides from "../components/Slides";
import { SliderData } from "../data/SliderData";

import React,{useState,useContext} from "react";
import Information from "../components/InfoSection";
import {Infodataone,Infodatatwo,Infodatathree,Infodatafour} from "../data/Infodata"
import Intro from "../components/Intro"

import PageFooter from "../components/Footer"
import Court from "./Court";
import Navbar from "../components/Navbar";
import { loginstateglobal } from "../App";

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
function Home() {
const loginContext=useContext(loginstateglobal)


  return !loginContext.court?(
<>

<GlobalStyle/>
<Slides slide={SliderData}/>

<ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
<Intro/>
</ScrollAnimation>

<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<Information {...Infodataone}/>
</ScrollAnimation>

<ScrollAnimation animateIn='fadeIn'>
<Information {...Infodatatwo}/>
</ScrollAnimation>

<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<Information {...Infodatathree}/>
</ScrollAnimation>

<ScrollAnimation animateIn='fadeIn'>
<Information {...Infodatafour}/>
</ScrollAnimation>
 </>)
:<Court/>;
  




  
  
}

export default Home;
