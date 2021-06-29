
import GlobalStyle from "../globalstyle";
import Slides from "../components/Slides";
import { SliderData } from "../data/SliderData";

import React,{useState} from "react";
import Information from "../components/InfoSection";
import {Infodataone,Infodatatwo,Infodatathree,Infodatafour} from "../data/Infodata"
import Intro from "../components/Intro"

import PageFooter from "../components/Footer"



function Home() {



  return (
   <>

   <GlobalStyle/>
   <Slides slide={SliderData}/>
   <Intro/>
   <Information {...Infodataone}/>
   <Information {...Infodatatwo}/>
   <Information {...Infodatathree}/>
   <Information {...Infodatafour}/>
  


  <PageFooter/>
   </>
  );
}

export default Home;
