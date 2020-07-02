import React from "react"
import styled from "styled-components"
import { useScrollPosition } from "hooks/scrollHook"
import {  animateScroll as scroll, scroller } from "react-scroll";


const Container = styled.div`
  padding-top: 3px;
`
const MenuItem = styled.li`
  width: 70px;
  color: ${({ theme }) => theme.colors.darkblue};
  cursor: pointer;
  margin: 0 20px;
  height:30px;
  text-shadow: 1px 1px 8px #fff;
  transition: letter-spacing 0.4s;
  &:hover {
    
    border-bottom: 1px solid  ${({ theme }) => theme.colors.blue};
  }
`
const ItemsWrapper = styled.ul`
  width: 500px;
  list-style: none;
  display: flex;
`

const Slider = styled.hr`
  color: ${({ theme }) => theme.colors.heading};
  width: 70px;
  background-color:${({ theme }) => theme.colors.blue};
  height: 1px;
  border: none;
  margin-top: -17px;
  margin-left:0px;
  transition: margin 0.5s;
  margin-left: ${({ position }) => {
    switch (position) {
      case "home":
        return "60px"
      case "about":
        return "170px"
      case "projects":
        return "280px"
      case "contact":
        return "390px"
    }
  }};
`;


const DesktopMenu = ({ refs }) => {
  const scrollPosition = useScrollPosition()

  const scrollTo =(name) =>{
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <Container>
      <ItemsWrapper ref={refs.menu}>
        <MenuItem onClick={() =>  scrollTo("home-section")}>Home</MenuItem>

        <MenuItem onClick={() =>  scrollTo("about-section")}>About</MenuItem>

        <MenuItem onClick={() =>  scrollTo("projects-section")}>
          Projects
        </MenuItem>

        <MenuItem onClick={() =>  scrollTo("contact-section")}>
          Contact
        </MenuItem>
      </ItemsWrapper>
      <Slider position={scrollPosition} ref={refs.slider} />
    </Container>
  )
}

export default DesktopMenu
