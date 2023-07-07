import React from "react";
import styled from "styled-components/macro";
import { Size } from "../data/style/size";
import { padding } from "../data/style/font";
import { missionData } from "../data/data";
import img from '../data/asset/AiqLogo.svg'

function CaseStudies() {
  return (
    <Section>
      <Container>
        <Content>
          <Frame1>
            <Item1>
              Africa Defense Technology case studies
            </Item1>
        
          </Frame1>

          <Frame2>
            <Item2>
                <ItemContent>
              {missionData.map((item) => (
                <ItemImg src={item.logo} alt='logo'/>
              ))}
            </ItemContent>
            </Item2>
            
          </Frame2>
        </Content>
      </Container>
    </Section>
  );
}

export default CaseStudies;

const Section = styled.section`
    // background:linear-gradient(152deg, rgba(240,238,238,0.8730085784313726) 0%, rgba(176,176,176,0.8870141806722689) 100%);
    width:100%;
    height:calc(80vh - 100px);
    background-position:50% 50%;
}

`;
const Container = styled.div`

`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media  screen and (max-width: 700px){
    flex-direction:column;
  }
`;
const Frame1 = styled.div`
  flex: 0.2;
  margin: 30px;
  @media  screen and (max-width: 700px){
   margin:10px;
  }
`;
const Frame2 = styled.div`
  flex: 1;
  margin: 30px;
  @media  screen and (max-width: 700px){
    margin:14px;
   }
`;
const Item1 = styled.p`
  display: flex;
  flex: 1;
  margin: 2% 0;
  width: 80%;
  font-family: "medium";
  padding: ${padding.p3}px;
  @media  screen and (max-width: 700px){
    width: 100%;
    font-size: ${Size.small}px;
  }
`;
const Item2 = styled.p`
//   width: 70%;
  font-size: ${Size.xxxmedium}px;
  font-family: "light";
  padding: ${padding.p3}px;
  margin-bottom: 3%;
  line-height:24px;
  @media  screen and (max-width: 700px){
    width: 100%;
    font-size: ${Size.small}px;
  }
`;

const ItemContent = styled.div`
display:flex;
gap:50px;
justify-content:center;
@media  screen and (max-width: 700px){
    flex-direction:row;
  }
`;
const ItemImg = styled.img`
width:20%;

@media  screen and (max-width: 700px){
    width:20%;
  }
`;
