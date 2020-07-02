import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Section from "helpers/Section"
import  { ReactComponent as Illustration}  from "assets/images/feelingproud.svg"
import TextContent from "components/molecules/TextContent"
import gsap from "gsap"


const StyledSvg = styled(Illustration)`
  margin-left: 50px;
  max-width: 500px;
 
  ${({ theme }) => theme.mq.standard} {
    max-width: 400px;
    
    margin-top:-150px;
    margin-left:0;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 300px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
  ${({ theme }) => theme.mq.standard} {
    flex-direction: column;
    
  }
`
const Home = () => {

  const svg = useRef(null);

  useEffect(() => {
    const [elements]= svg.current.children;
   
    const character = elements.getElementById('character');
    const computer = elements.getElementById('computer');
    const desk = elements.getElementById('desk');
    const text = elements.getElementById('text');
    const screen = elements.getElementById('screen');

    gsap.set([character,computer,desk,text.children,screen], {autoAlpha: 0});
    const tl = gsap.timeline();

    tl.to(desk, {  easy: "power2.easyOut",delay:2,duration: 1,autoAlpha: 1})
    .fromTo(computer,{y:'-=50'}, { y:'+=50', easy: "power2.easyInOut",duration: 1,autoAlpha: 1})
    .fromTo(character,{x:'-=100'}, { x:'+=100', easy: "power2.easyInOut",duration: 0.7,autoAlpha: 1})
    .to(screen, {  easy: "power4.easyOut",duration: 1,autoAlpha: 1})
   .staggerTo([text.children], 0.5, { autoAlpha: 1 }, 0.3)
  });

  return (
    <Section id="home-section">
      <Container >
        <TextContent />
        <div ref={svg}>
        <StyledSvg />
        </div>
      </Container>
    </Section>
  )
}

export default Home
