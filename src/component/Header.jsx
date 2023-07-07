import React from "react";
import styled from "styled-components";
import { Font, FontWeight, Fonts, fonts, margin, padding } from "../data/style/font";
import logo from "../data/asset/AiqLogoFree.svg";
import { navContent } from "../data/data";
import { colors } from "../data/style/color";
import { Size } from "../data/style/size";
import { useGlobalContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
const Header = () => {
  const {handleMouseOn, handleMouseLeave, setHover, hover} = useGlobalContext()
  return (
    <>
      <Section>
        <Container>
          <LogoFrame>
            <Logo src={logo}></Logo> 
          </LogoFrame>
          <NavFrame>
            {navContent.navItem1.map((item) => (
              <NavData onMouseEnter={()=> handleMouseOn(item.id)} onMouseLeave={handleMouseLeave}>
                <Links key={item.id} >
                  <span>
                    {item.name} <span className={hover === item.id ? item.style : 'remove'}>{item.icon}</span>
                  </span>
                </Links>
                  {/* {hover === item.id ? item.content : null} */}
              </NavData>
            ))}
          </NavFrame>
         
        </Container>

        <BorderBottom />
        <ContainerBottom>
          <NavBtmFrame>
            {navContent.navItem2.map((item) => (
              <NavData onMouseEnter={()=> handleMouseOn(item.id)} onMouseLeave={handleMouseLeave}>
                <Links key={item.id} >
                  <Link to={item.url} style={{textDecoration:'none', color:colors.primary}}>
                  <span>
                    {item.name} <span className={hover === item.id ? item.style : 'remove'}>{item.icon}</span>
                  </span>
                  </Link>
                </Links>
                  {/* {hover === item.id ? item.content : null} */}
              </NavData>
            ))}
          </NavBtmFrame>
         </ContainerBottom>
      </Section>
    </>
  );
};
export default Header;

const Section = styled.section`
`;
const Container = styled.div`
  flex-direction: row;
  display: flex;
  // justify-content: space-between;
  align-items: center;
`;
const ContainerBottom = styled.div`
  flex-direction: row;
  display: flex;
  margin-left:4%;
`;

const LogoFrame = styled.div`
  display: flex;
  flex: 0.15;
  justify-content: center;
`;

const NavFrame = styled.div`
  display: flex;
  flex: 0.35;
  color: ${colors.primary};

  @media screen and (max-width:700px){
    display:none
  }
`;
const NavBtmFrame = styled.div`
  display: flex;
  color: ${colors.primary};
  @media screen and (max-width: 700px){
   display:none;
  }
`;

const NavData = styled.div`
  margin-right: ${margin.m13}px;

`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-family: 'regular', Arial;
  font-size: ${Size.xxmedium}px;
  font-weight: ${FontWeight.semiBold};
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;  
  }
  .icon{
    transform:rotate(180deg);
    transition: all .6s ease;
  }
  .remove{
    transform: rotate(0deg);
    transition: all .6s ease;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 40px;
`;
export const BorderBottom = styled.div`
  width:100vw;
  height:.5px;
  background:#ccc;

`