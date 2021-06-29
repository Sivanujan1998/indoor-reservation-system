import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section=styled.section`
width: 100%;
height: 100%;
margin-top: -120px;

`;

const Container=styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`;

const Columnleft=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 0rem 2rem;
transition: 0.4s;

&:hover{
    transform: translateY(20px);
}
order: ${({reverse})=>(reverse ? '2':'1')};

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem,6vw,2rem);
}
p{
    margin-bottom: 1rem;  
}
`;
const Columnright=styled.div`
padding: 0rem;
float: right;
order: ${({reverse})=>(reverse ? '1':'2')};
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
    position
}
) => {
    return (
        <Section>
            <Container>
                <Columnleft>
                <h1>{heading}</h1>
                <p>{paraone}</p>
                <p>{paratwo}</p>
                <Button to="/home" primary="true">{buttonlabel}</Button>
                </Columnleft>
                <Columnright reverse={reverse}>
                <img src={image} alt="home"/>
                </Columnright>
            </Container>
        </Section>
    )
}

export default InfoSection
