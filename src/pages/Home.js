import React from 'react'
import NavbarContainer from '../container/NavbarContainer'
import HeroSection from '../container/HeroSection'
import Mission from '../container/Mission'
import Case from '../container/Case'
import OurSolution from '../container/OurSolution'
import CardContainer from '../container/CardContainer'

function Home() {
  return (
    <div className="home__container">
      <NavbarContainer />
      <HeroSection />
      <Mission />
      {/* <OurSolution /> */}
      <Case />
      <CardContainer />
    </div>
  )
}

export default Home