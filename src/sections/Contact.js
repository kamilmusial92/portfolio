import React, { useState, useEffect, useRef } from "react"
import Section from "helpers/Section"
import styled from "styled-components"
import { useScrollPosition } from "hooks/scrollHook"
import {ReactComponent as Illustration} from "assets/images/contact.svg"
import Heading from "helpers/Heading"
import gsap from "gsap"

import { SocialLinks } from "utils/SocialLinks"
import Footer from "components/organisms/Footer"

const StyledSvg = styled(Illustration)`
  margin-left: -85px;
  max-width: 400px;
  max-height:500px;
  ${({ theme }) => theme.mq.standard} {
    max-width: 300px;
    margin-top: -35px;
    max-height: 400px;
    margin-left: -65px;
  }

  ${({ theme }) => theme.mq.mobile} {
    max-width: 200px;
    max-height: 300px;
    margin-left: -15px;
    margin-top: -95px;
  }

`

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
`


const ContactInfoWrapper = styled.div`
  margin-left: 30px;
  ${({ theme }) => theme.mq.mobile} {
    margin-left: 5px;
  }
`
const ContactInfoItem = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.standard} {
    align-items: center;
  }
`
const Content = styled.div`
  padding: 10px;
  ${({ theme }) => theme.mq.mobile} {
    padding: 0;
  }
`
const Title = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 14px;
  }
`
const Value = styled.p`
  
  color: ${({ theme }) => theme.colors.blue};
  font-weight: normal;
  font-size: 14px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 12px;
  }
`
const Contact = () => {
  const svg = useRef(null);
  const scrollPosition = useScrollPosition();
  const [Animation, setAnimation] = useState();
  const [tl2] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    const character = svg.current;
    gsap.set([character], {autoAlpha: 0});

    setAnimation(
   
      tl2.fromTo(character,{x:'+=150'}, { x:'-=150', easy: "power2.easyInOut",duration: 1,autoAlpha: 1})
    
        )

  }, [tl2]);

  if(scrollPosition==='contact')
  {
    Animation.play();
  }

  return (
    <Section id="contact-section">
      <Container>
      
 
      <ContactInfoWrapper data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50">
      <Heading>Contact</Heading>
      <Content>
        <ContactInfoItem>
          <Title>EMAIL</Title>
          <Value>kamilmusial9227@gmail.com</Value>
        </ContactInfoItem>

        <ContactInfoItem>
          <Title>PHONE</Title>
          <Value>577725889</Value>
        </ContactInfoItem>

        <ContactInfoItem>
          <Title>GITHUB</Title>
          <a href={SocialLinks.github} target="_blank">
            <Value></Value>
          </a>
        </ContactInfoItem>
        <ContactInfoItem>
          <Title>LINKEDIN</Title>
          <a href={SocialLinks.linkedin} target="_blank">
            <Value></Value>
          </a>
        </ContactInfoItem>
        
        <ContactInfoItem>
          <a >
           CV
          </a>
        </ContactInfoItem>
      </Content>
    </ContactInfoWrapper>
    
    
    <StyledSvg ref={svg}/>

      
      </Container>
      <Footer />
    </Section>
  )
}

export default Contact
