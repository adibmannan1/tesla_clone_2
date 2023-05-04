import React from 'react'
import styled from 'styled-components'

function Section({title, backgroundImg, description, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          {description && 
          <p>{description}</p>}
          
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText && 
              <RightButton>
                {rightBtnText}
              </RightButton>
            }
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
  padding: 10vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8vh;
  margin-bottom: 2vh;
  @media (max-width: 768px){
    flex-direction: column;
    gap: 3vh;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.85);
  border-radius: 5px;
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const RightButton = styled(LeftButton)`
  background-color: rgba(255,255,255, 0.85);
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 5vh;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s; 
`
const Buttons = styled.div`
  
`