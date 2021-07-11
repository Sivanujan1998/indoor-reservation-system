import React,{useContext} from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import { loginstateglobal } from '../App';
import "../Style/Booknow.css"
const Section=styled.section`
width: 100%;
height: 100%;
margin-top: -120px;

`;

const Container=styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;
margin-top: -15%;
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    margin-top: -30%;
}
`;

const Columnleft=styled.div`
order: ${({reverse})=>(reverse ? '2':'1')};
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 0rem 1rem 0rem 1rem;
transition: 0.4s;
float: left;

&:hover{
    transform: translateY(20px);
}


h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem,6vw,2rem);
}
p{
    margin-bottom: 1rem;  
}
`;
const Columnright=styled.div`
order: ${({reverse})=>(reverse ? '':'2')};
padding: 1rem;
float: right;
padding: 1rem ;
display:flex;
justify-content: center;
align-items: center;
transition: 0.5s;
&:hover{
    transform: translateY(20px);
}
@media screen and (max-width:768px){
    margin-top: -31%;
    order: ${({reverse})=>(reverse ? '2':'1')};
}
img{
width: 100%;
height: 70%;
object-fit: cover;

@media screen and (max-width:768px){
    width: 90%;
    height:90%
}}


`;

const InfoSection = ({
    heading,
    paraone,
    paratwo,
    buttonlabel,
    reverse,
    image,
    path,
    position
}
) => {
    const loginContext=useContext(loginstateglobal)
    return (
        <Section><div className="bookingcontent">
            <Container>
                <Columnleft><div className="detailsgame">
                <h1>{heading}</h1>
                <p>{paraone}</p>
                <p>{paratwo}</p>
                <Button onClick={()=>{
                       (loginContext.login)?
                       loginContext.setcourt(true):
                        loginContext.setpopup(true)
                        
                }} primary="true">{buttonlabel}</Button></div>
                </Columnleft>
                <Columnright reverse={reverse}>
                <img src={image} alt="home"/>
                </Columnright>
            </Container></div>
        </Section>
    )
}

export default InfoSection
