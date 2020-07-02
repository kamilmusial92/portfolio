import React from "react"
import styled from "styled-components"
import {ReactComponent as Logo} from "assets/logo.png"

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-end;
`
const Typography = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
  font-weight: 400;
`
const Footer = () => {
  return (
    <Container>
      <Typography>2020 Kamil Musiał</Typography>
    </Container>
  )
}

export default Footer
