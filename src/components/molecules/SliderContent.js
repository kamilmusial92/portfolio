import React from "react"
import styled from "styled-components"
import Heading from "helpers/Heading"
import rightButton from "assets/icons/right-arrow.png";
import leftButton from "assets/icons/left-arrow.png";


const StyledContent = styled.div`
  display:flex;
 
  justify-content:center;
  ${({ theme }) => theme.mq.standard} {
    flex-direction: column;
    align-items:center;
  }

`
const StyledScreen = styled.div`
 margin: 30px;
 width:700px;
 height:500px;
 background-image:url(${({image}) => image});
 background-repeat:no-repeat;
 background-size:100%;

 ${({ theme }) => theme.mq.standard} {
    max-width: 600px;
    max-height: 400px;
    margin:0;
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 400px;
    max-height: 300px;
  }
 
  ${({ theme }) => theme.mq.mobile} {
    max-width: 250px;
    max-height:150px;
  }

`
const StyledTextContainer = styled.div`
  max-width:300px; 
  border-left:1px solid ${({ theme }) => theme.colors.darkblue};
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  padding: 10px 30px;
  
  ${({ theme }) => theme.mq.standard} {
    flex-direction:row;
    max-width:400px;
    border:0;
    
  }

`

const StyledDescription= styled.div`
   flex-direction:column;
   justify-content:space-evenly;

   ${({ theme }) => theme.mq.standard} {
      padding:40px 10px;
   }
   ${({ theme }) => theme.mq.mobile} {
      padding:5px 10px;
   }
`;

const StyledTextHeading = styled(Heading)`
 

  ${({ theme }) => theme.mq.standard} {
    height: 220px;
    
    padding:10px 20px;
    border-right:1px solid ${({ theme }) => theme.colors.darkblue};
  }

`
const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 3px 0 15px 0;
`
const StyledTitle = styled.div`
 font-weight:bold;
`
const SlideButton = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size:100%;
  width:32px;
  height:32px;
  :hover{
    transform: scale(1.2);
    cursor:pointer;
  }
`;

const StyledButtons = styled.div`
  display:flex;
  justify-content: space-around;
  width:200px;
  padding:10px;
`;

const StyledImageContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
 
`;

const SliderContent = ({image, setSlide}) => {

    return (
        
        <StyledContent>
          <StyledImageContainer>
            <StyledScreen image={image}/>

            <StyledButtons>
            <SlideButton img={leftButton} onClick={setSlide.prev}/>
            <SlideButton img={rightButton} onClick={setSlide.next}/>
            </StyledButtons>  
          </StyledImageContainer>

          <StyledTextContainer>
            <StyledTextHeading>Portfolio</StyledTextHeading>
          
            <StyledDescription>
          
              <StyledTitle>Date</StyledTitle>
              <StyledText>date</StyledText>
        
              <StyledTitle>Technologies</StyledTitle>
              <StyledText>text</StyledText>
        
              <StyledTitle>Github</StyledTitle>
              <StyledText>text</StyledText>
        
              <StyledTitle>Demo</StyledTitle>
              <StyledText>text</StyledText>
            </StyledDescription>

          </StyledTextContainer>
        </StyledContent>
    )
}

export default SliderContent;