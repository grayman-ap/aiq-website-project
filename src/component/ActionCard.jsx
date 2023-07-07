import React from 'react'
import styled from 'styled-components'
import { ActionCardData } from '../data/data'
import { colors } from '../data/style/color'
import { Link } from 'react-router-dom'
const  ActionCard  = ()=>{
    return(
        <CardContainer>
                <Container>
                    <LeftContainer>AIQ Blog and Affairs</LeftContainer>
                    <RightContainer>
                        <Frame>
                            {ActionCardData.map((card)=>(
                                <CardData>
                                    <CardHeader>{card.title}</CardHeader>
                                    <CardImage src={card.image} alt="Cardiimage"/>
                                    <CardText>{card.content}</CardText>
                                    <Link style={{color:'blue', textDecoration:'none', fontSize:18,}} >{card.btn}</Link>
                                    <br />
                                    <Margin  />
                                    <Link style={{color:'blue', textDecoration:'none', fontSize:18,}}>{card.btn2}</Link>
                                </CardData>
                            ))}
                        </Frame>
                    </RightContainer>
                </Container>
        </CardContainer>
    )
}
export default ActionCard
const  CardContainer  = styled.div`

`
const  Container  = styled.div`
    display:flex;
    background:${colors.secdark};
    color:#fff;
    justify-content:center;

`
 const LeftContainer  = styled.div`
    width:50%;
    padding:30px;
    font-family:'regular';
    font-size:24px;
`
const  RightContainer  = styled.div`
    // background:#000;
`
const  Frame =  styled.div`
display:grid;
grid-template-columns:repeat(3, 3fr);
grid-auto-flow: dense;
gap:30px;
`
const  CardData =  styled.div`
        margin:5px;
`
const  CardImage =  styled.img`
    max-width:100%;
    height:200px;
    border-radius:2px;
`
const  CardHeader =  styled.div`
margin:30px 0;
font-size:24px;
font-family:'regular';
width:90%;
`
const CardText =  styled.p`
color:#ccc;
margin:15px 0;
font-size:18px;
font-family:'regular';
width:80%;
`
const  CardBtn =  styled.button`

`
const Margin = styled.div`
margin:15px 0;
`