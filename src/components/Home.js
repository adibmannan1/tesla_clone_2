import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title={'Model-3'} backgroundImg="model-3.jpg" 
        description="Order Online For Touchless Delivery" 
        leftBtnText="Order Now" rightBtnText="Demo Drive"/>
        <Section 
        title={'Model-Y'} backgroundImg="model-y.jpg" 
        description="Order Online For Touchless Delivery" 
        leftBtnText="Order Now" rightBtnText="Demo Drive"/>
        <Section 
        title={'Model-S'} backgroundImg="model-s.jpg" 
        description="Order Online For Touchless Delivery" 
        leftBtnText="Order Now" rightBtnText="Demo Drive"/>
        <Section 
        title={'Model-X'} backgroundImg="model-x.jpg" 
        description="Order Online For Touchless Delivery" 
        leftBtnText="Order Now" rightBtnText="Demo Drive"/>
        <Section 
        title={'Cheapest Solar Panels in America'} backgroundImg="solar-panel.jpg" 
        description="Money Back Guarantee" 
        leftBtnText="Custom Order" rightBtnText="Learn More"/>
        <Section 
        title={'Solar For New Roofs'} backgroundImg="solar-roof.jpg" 
        description="Solar Roofs Costs Less Than New Roofs" 
        leftBtnText="Custom Order" rightBtnText="Learn More"/>
        <Section 
        title={'Accessories'} backgroundImg="accessories.jpg" 
        leftBtnText="Shop Now"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`