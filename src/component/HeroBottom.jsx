import React from 'react'
import styled from 'styled-components'
import { colors } from '../data/style/color'
import { margin, padding } from '../data/style/font'
import { heroData } from '../data/data'
import { Size } from '../data/style/size'

function HeroBottom() {
  return (
   <Section>
        <Container>
            <Content>
                {heroData.map((item)=>(
                    <HeroData>
                        <Index>
                            {item.index}
                        </Index>
                        <Links>
                            {item.link}
                        </Links>
                    </HeroData>
                ))}
            </Content>
        </Container>
   </Section>
  )
}

export default HeroBottom

const Section = styled.section`
`
const Container = styled.div`
 background: ${colors.secdark};
 border-top:1px solid #494949;
`
const Content = styled.div`
display:flex;
margin-left:${margin.m8}px;
@media screen and (max-width: 700px){
    display:block
  }
  
`
const HeroData = styled.div`

color:${colors.white};
cursor:pointer;
font-family:'regular';
width:200px;
padding:${padding.p6}px;
font-size:${Size.small}px;
transition: all  .3s  ease;
&:hover{
    background:#2d2c2c;
}
`

const Index = styled.div`
`

const Links = styled.a`
`

