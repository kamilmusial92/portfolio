import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.main};
  }
  
  h1{
    margin: 0;
  }
  
  a {
    text-decoration: none !important;
  }

`

export default GlobalStyle
