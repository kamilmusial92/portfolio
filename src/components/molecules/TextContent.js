import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import TechIconList from "./TechIconList"
import StyledButton from "helpers/StyledButton"
import {  animateScroll as scroll } from "react-scroll";
import gsap from "gsap"

const Container = styled.div`
  padding-right: 10px;
  z-index: 10;
  ${({ theme }) => theme.mq.standard} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`
const Title = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 400;
  font-size: 38px;
  line-height: 49px;
  white-space: nowrap;
  ${({ theme }) => theme.mq.standard} {
    font-size: 40px;
    line-height: 44px;
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: 34px;
  }
  ${({ theme }) => theme.mq.mobile} {
    font-size: 24px;
    line-height: 34px;
  }
`
const TitleWrapper = styled.div`
  margin: 5px 0;
  ${({ theme }) => theme.mq.standard} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top:250px;
  }
 
`
const HiddenBox = styled.div`
  overflow: hidden;
`
const SkillsWrapper = styled.div`
  overflow: hidden;
  padding: 15px 0;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mq.standard} {
    padding: 10px 0;
  }
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }
`
const Language = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
 
  font-size: 18px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 16px;
    padding-bottom: 4px;
  }
`
const ButtonsWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content:center;
`


const TextContent = () => {
  const titleRef = useRef(null)
  const lanRef = useRef(null)
  const techRef = useRef(null)
  const buttonsRef = useRef(null)
  useEffect(() => {
    const title = titleRef.current
    const lan = lanRef.current
    const tech = techRef.current
    const buttons = buttonsRef.current

    const tl = gsap.timeline()

    gsap.set([...title.children, ...tech.children, ...buttons.children], {
      autoAlpha: 0,
    })
    gsap.set([...lan.children], { autoAlpha: 0, x: "-20" })

    tl.staggerFromTo(
      [...title.children],
      0.6,
      { y: "+=30" },
      { autoAlpha: 1, y: "0", delay: "3" },
      0.3
    )
      .staggerTo([...lan.children], 0.2, { autoAlpha: 1, x: "0" }, 0.1)
      .staggerTo([...tech.children], 0.2, { autoAlpha: 1 }, 0.1)
      .staggerTo([...buttons.children], 0.4, { autoAlpha: 1 }, 0.3, "-=1")
  }, [])


  return (
    <Container>
      <TitleWrapper ref={titleRef}>
        <HiddenBox>
          <Title>Hello,</Title>
        </HiddenBox>
        <HiddenBox>
          <Title>I'm Kamil Musiał,</Title>
        </HiddenBox>
        <HiddenBox>
          <Title>web developer.</Title>
        </HiddenBox>
      </TitleWrapper>
      <SkillsWrapper>
        <Language ref={lanRef}>
          <span>JavaScript</span>
          <span> / </span>
          <span>PHP</span>
        </Language>
        <TechIconList techRef={techRef} />
      </SkillsWrapper>
      <ButtonsWrapper ref={buttonsRef}>
        <StyledButton onClick={() => scroll.scrollTo("#projects-section")}>
          See All Projects
        </StyledButton>
       
      </ButtonsWrapper>
    </Container>
  )
}

export default TextContent
