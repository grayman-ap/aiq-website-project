import React from "react";
import styled from "styled-components/macro";
import { Size } from "../data/style/size";
import { padding } from "../data/style/font";
import { missionData } from "../data/data";
import img from '../data/asset/AiqLogo.svg'

function MissionReady() {
  return (
    <Section>
      <Container>
        <Content>
          <Frame1>
            <Item1>
              Our defense and intelligence technology solutions are designed to
              ensure that you are fully prepared for your mission
            </Item1>
            {/* <ItemContent>
              {missionData.map((item) => (
                <ItemImg src={item.logo} alt='logo'/>
              ))}
            </ItemContent> */}
          </Frame1>

          <Frame2>
            <Item2>
              AIQ is a leading AI company that specializes in providing tailored
              and ready-to-use solutions for the defense and intelligence
              industries. Our state-of-the-art AI technologies are designed to
              help you achieve your unique objectives, whether that's improving
              situational awareness, optimizing operations, or enhancing
              decision-making. At AIQ, we understand that each client has
              distinct requirements and challenges, which is why we collaborate
              closely with you to develop personalized solutions that meet your
              specific needs.
            </Item2>
            <Item2>
              Our team of AI specialists leverages a wide range of techniques,
              including machine learning, natural language processing, computer
              vision, and more, to offer top-notch solutions. We take pride in
              working with a diverse range of clients in the defense and
              intelligence sectors, including government agencies, military
              organizations, and private companies. Regardless of the scale or
              complexity of your project, we have the knowledge and proficiency
              to deliver outstanding outcomes.
            </Item2>
            <Item2>
              We offer bespoke and innovative AI-powered solutions that are
              tailored to meet the specific challenges and requirements of the
              defense and intelligence sectors. Using cutting-edge technologies
              such as machine learning, natural language processing, and
              computer vision, we provide customized solutions that enhance
              situational awareness, streamline decision-making, and optimize
              operations. With our extensive experience working with government
              agencies, military organizations, and private companies, we have
              the expertise to deliver top-quality solutions for any project,
              regardless of its complexity or scale.
            </Item2>
          </Frame2>
        </Content>
      </Container>
    </Section>
  );
}

export default MissionReady;

const Section = styled.section`
&:before{
    content:'';
    background-image:linear-gradient(299deg, rgba(213,212,217,0.1) 14%, rgba(85,85,85,0.1) 84%));
    background-repeat:no-repeat;
    position:absolute;
    width:100%;
    height:calc(80vh - 100px);
    opacity:.1;
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
  width: 70%;
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
flex-direction: column;
gap:50px;
@media  screen and (max-width: 700px){
    flex-direction:row;
  }
`;
const ItemImg = styled.img`
width:80px;
@media  screen and (max-width: 700px){
    width:20%;
  }
`;
