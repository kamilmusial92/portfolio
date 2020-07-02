
import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "theme/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "theme/theme"
import Header from "components/organisms/Header"


const Template = ({ children }) => {
    return (
      <>
        <ThemeProvider theme={theme}>
         
          <GlobalStyle />
          <Header />
  
          <main>{children}</main>
        </ThemeProvider>
      </>
    )
  }
  
  Template.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Template
  