import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";
import Heading from "helpers/Heading"
import image from "assets/images/desktop.png";
import Section from "helpers/Section"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderContent from "../components/molecules/SliderContent"



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
  padding: 0 50px;
  
`




const StyledHeading = styled(Heading)`
text-align:center;
`
const StyledSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
  margin:15px;
`



const Projects = () =>{
  
  const slider= useRef();
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const setSlide = {
    prev: () => slider.current.slickPrev(),
    next: () => slider.current.slickNext(),
  }
return (
 
  <Section id="projects-section">
  <Container>

    
    <StyledHeading>My projects</StyledHeading>

    <StyledSlider  ref={slider} {...settings}>
      <SliderContent setSlide={setSlide} image={image}/>
      <SliderContent setSlide={setSlide} image={image}/>
   
    </StyledSlider>

   
     
  </Container>
  </Section>
 
)
}

export default Projects;