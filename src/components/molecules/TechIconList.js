import React from "react"
import styled from "styled-components"
import { ReactComponent as ReactIcon } from "assets/icons/reactIcon.svg"

import { ReactComponent as HtmlIcon } from "assets/icons/htmlIcon.svg"
import { ReactComponent as CssIcon } from "assets/icons/cssIcon.svg"
import { ReactComponent as ReduxIcon } from "assets/icons/reduxIcon.svg"
import { ReactComponent as LaravelIcon } from "assets/icons/laravelIcon.svg"
import { ReactComponent as MysqlIcon } from "assets/icons/mysqlIcon.svg"


const Container = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  padding: 0 3px;
  width:32px;
  height:32px;

  transition: transform 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`

const TechIconList = ({ techRef }) => {
  return (
    <Container ref={techRef}>
      
      <IconWrapper>
        <CssIcon />
      </IconWrapper>

      <IconWrapper>
        <HtmlIcon />
      </IconWrapper>

      <IconWrapper>
        <ReactIcon />
      </IconWrapper>

      <IconWrapper>
        <ReduxIcon />
      </IconWrapper>

      <IconWrapper>
        <LaravelIcon />
      </IconWrapper>

      <IconWrapper>
        <MysqlIcon />
      </IconWrapper>

    
      
    </Container>
  )
}

export default TechIconList
