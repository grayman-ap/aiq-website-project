import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import space2 from "../data/asset/FIVIJU8WYAEXP76.jpg";
import space1 from "../data/asset/header-satellite-mercury.jpg";
import space3 from "../data/asset/pexels-pixabay-220201.jpg";
import space4 from "../data/asset/pexels-spacex-60132.jpg";
import space5 from "../data/asset/pexels-blue-arauz-11470749.jpg";
import { colors } from "../data/style/color";
import { Size } from "../data/style/size";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { margin, padding } from "../data/style/font";
import { CtaButton } from "./CtaButton";
import HeroBottom from "./HeroBottom";
function Homepage() {
  const [backgroundImage, setBackgroundImage] = useState(space1);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const images = [space1, space2, space3, space4, space5];
    let i = 0;
    const interval = setInterval(() => {
      const nextImage = images[i];

      // Fade out current image
      backgroundRef.current.classList.add("fade-out");
      setTimeout(() => {
        setBackgroundImage(nextImage);
        backgroundRef.current.classList.remove("fade-out");
      }, 5); // set transition duration to 500ms

      i = (i + 1) % images.length;
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <HeroFrame ref={backgroundRef} backgroundImage={backgroundImage}>
          <ContentFrame>
            <SmallContent>
            <HeroFrameSmall ref={backgroundRef} backgroundImage={backgroundImage}>
              <Play>
              <Icon>
                <BsFillPlayCircleFill />
              </Icon>
            </Play>
            </HeroFrameSmall>
            </SmallContent>
            <Content>
              <Title>
                Africa's first defence and intelligence focused AI company
              </Title>
              <SecondText>
                Achieving Strategic ways to unlock the insights from data and
                enable members of the defence and intelligence communities to
                derive actionable intelligence, faster.
              </SecondText>
              <Padding>
                <CtaButton title="See how we do this" className="bg" />
                <CtaButton title="Learn more about Aiq" className="outline" />
              </Padding>
            </Content>
            <Play>
              <Icon>
                <BsFillPlayCircleFill />
              </Icon>
            </Play>
          </ContentFrame>
        </HeroFrame>
        <HeroBottom />
      </Container>
    </Section>
  );
}

export default Homepage;

const Section = styled.section``;
const Container = styled.div`
  border-top: 1px solid ${colors.secdark};
`;
const HeroFrame = styled.div`
  width: 100%;
  background-image: linear-gradient(
      299deg,
      rgba(19, 15, 102, 0.5) 14%,
      rgba(45, 45, 45, 0.1) 84%
    ),
    url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleX(-1);
  opacity: 1;
  transition: opacity 0.4s ease;
  .fade-out {
    opacity: 0;
  }
  @media screen and (max-width: 700px) {
    background-image: none;
    display: block;
  }
`;
const Title = styled.h2`
  color: ${colors.white};
  font-family: "light";
  font-size: ${Size.xxlarge}px;
  width: 80%;
`;
const SecondText = styled.h2`
  color: ${colors.white};
  font-family: "extralight";
  font-size: ${Size.medium}px;
  width: 60%;
  margin: 10% 0 5% 0;
`;
const ContentFrame = styled.div`
  transform: scaleX(-1);
  display: flex;
  height: 90%;
  transition: opacity 0.4s ease;
  padding: ${padding.p6}px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;
const Content = styled.div`
width:80%;
margin:${margin.m8}px;

@media screen and (max-width:700px){
  background-color:${colors.primary};
  width:100%;
  margin:0;
}
`;
const Padding = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Play = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.span`
  color: ${colors.white};
  font-size: ${Size.xveryLarge}px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const SmallContent = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const HeroFrameSmall = styled.div`
  width: 100%;
  background-image: linear-gradient(
      299deg,
      rgba(19, 15, 102, 0.5) 14%,
      rgba(45, 45, 45, 0.1) 84%
    ),
    url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleX(-1);
  opacity: 1;
  transition: opacity 0.4s ease;
  .fade-out {
    opacity: 0;
  }
  // @media screen and (min-width: 700px) {
  //   background-image: none;
  //   display: block;
  // }
`;