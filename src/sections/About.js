import React, { useState, useEffect, useRef } from "react"
import Section from "../helpers/Section"
import { useScrollPosition } from "hooks/scrollHook"
import styled from "styled-components"
import {ReactComponent as AboutSvg} from "assets/images/about.svg"
import Heading from "helpers/Heading"
import gsap from "gsap"

const StyledSvg = styled(AboutSvg)`
  margin-left: 100px;
  max-width: 500px;

  ${({ theme }) => theme.mq.standard} {
    max-height: 200px;
    max-width: 500px;
    margin: 0;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 300px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 240px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
  ${({ theme }) => theme.mq.standard} {
    flex-direction: column-reverse;
  }
`
const DescriptionContainer = styled.div`
  padding: 10px 20px;
  margin-left: 20px;
  ${({ theme }) => theme.mq.xl} {
    margin-left: 50px;
  }
  ${({ theme }) => theme.mq.standard} {
    margin: 0;
  }
`
const DescriptionContent = styled.div`
 
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  margin: 15px 0;
  max-width: 500px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mq.xl} {
    font-size: 22px;
    line-height: 26px;
    max-width: 450px;
  }
  ${({ theme }) => theme.mq.standard} {
    text-align: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 350px;
  }
  ${({ theme }) => theme.mq.mobile} {
    max-width: 260px;

    font-size: 18px;
    line-height: 22px;
  }
`

const About = () => {

  const svg = useRef(null);
  const scrollPosition = useScrollPosition();
  const [Animation, setAnimation] = useState();
  const [tl2] = useState(gsap.timeline({ paused: true }));


  useEffect(() => {
    const [elements]= svg.current.children;
    const flower = elements.getElementById('flower');
    const stem= flower.children.stem;
    const earth= flower.children.earth;
    const plants=flower.children.plants;
    const character = elements.getElementById('character');
    const card = elements.getElementById('card');
    const text = elements.getElementById('text');
  

    gsap.set([card,stem,earth,plants.children,character,text.children], {autoAlpha: 0});
    gsap.set(stem, {transformOrigin: '0% 100%' });
    setAnimation(
   
    tl2.fromTo(card,{y:'+=150'}, { y:'-=150', easy: "power2.easyInOut",duration: 1,autoAlpha: 1})
    .to(earth, {x:"0", duration: 1,autoAlpha: 1})
    .fromTo(character,{x:'-=100'}, { x:'+=100', easy: "power2.easyInOut",duration: 0.7,autoAlpha: 1})
    
    .staggerTo([text.children], 0.5, { autoAlpha: 1 }, 0.3)
    .fromTo(stem, { scaleY:0}, {scaleY:1, duration:1.5,  autoAlpha: 1} ,'-=1')
    .staggerFromTo(plants.children, 1, { scale: 0.8, opacity:0}, {scale:1,opacity:1, autoAlpha: 1}, 1)
      )
  }, [tl2]);

  if(scrollPosition==='about')
  {
    Animation.play();
  }


  return (
    <Section id="about-section">
      <Container>
      <div ref={svg}>
        <StyledSvg />
      </div>
        <DescriptionContainer data-aos="fade-up"  data-aos-easing="ease-in-out" data-aos-delay="50">
          <Heading>About</Heading>
          <DescriptionContent>
            Hello, I'm 28 years old r ejkoerko erok o,
            gregkoerkgo erew fwefwe
            e fwe
            fwe
            feeeeeeeeeeeeeefwef
          </DescriptionContent>
        </DescriptionContainer>
      </Container>
    </Section>
  )
}

export default About
