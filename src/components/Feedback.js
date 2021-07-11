/* eslint-disable no-undef */

import React,{useEffect,useState} from 'react'
import { FaStar } from "react-icons/fa";
import ReactTimeAgo from 'react-time-ago'
import Reviewservice from '../Services/Reviewservice';
import styled from 'styled-components';
import "../Style/feedback.css"


 const Container = styled.div`

`;


function Feedback(props) {
  const [contentstate, setcontentState] = useState([])
 
 
    
useEffect(()=>{
    Reviewservice.getreview().
    then( 
       r=>setcontentState(r.data)
       )
  .catch(er=>error(er))
  });

  return (

<>
{
contentstate.map( d => 
<div>
<h1>

 <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label className="starts">
           <FaStar
                color={
                  givenRating < d.rate || givenRating === d.rate
                    ? "#FFD700"
                    : "rgb(192,192,192)"
                }
              />
            
          </label>
        );
      })}

    </Container>

    {d.comment}
<div className="person">  
  by:-{(String(d.name))==="null"?"Anonymous":d.name}
-  <i><ReactTimeAgo date={d.time} locale="en-US"/></i>
</div> </h1>

<hr/>
</div>).reverse()
}   
</>

  );
    
}

export default Feedback
