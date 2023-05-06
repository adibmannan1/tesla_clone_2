import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img className='logo' src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href="#">{car}</a>
        ))}
      </Menu>
      <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu onClick={()=> setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li><a key={index} href="">{car}</a></li>
        ))}
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-In</a></li>
        <li><a href="">Cyber Truck</a></li>
        <li><a href="">Roadster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styled.div`
  min-height: 55px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    
  }
  @media (max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  cursor: pointer;
  transition: ease-out 0.1s;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255);
  width: 300px;
  z-index: 2;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props=> props.show? 'translateX(0)' : 'translateX(100%)'};
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight: 600;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`