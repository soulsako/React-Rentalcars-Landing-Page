import React from 'react';
import { FaPoundSign, FaEdit, FaUser, FaBars } from "react-icons/fa";
import GBIcon from '../assets/gb-icon.png';
import styled from 'styled-components';
import MenuLink from '../atoms/MenuLink';
import { device } from '../sharedStyles';
import { HideOnDesktop, HideOnMobile } from '../sharedStyles';

const GobalHeader = styled.div`
   background-color: #096FB9;
`;

const Logo = styled.img.attrs({
  src: 'https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/header/logo_white.svg'
  })`
  display: block;
  width: 13.4rem;
  height: 1.8rem;
  @media ${device.mobile} {  
    width: 16.3rem;
    height: 2.2rem;
  }
`;

const Wrapper = styled.div`

  border-bottom: 1px solid hsla(0,0%,100%,.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  width: 100%;
  margin: 0 auto;
  @media ${device.mobile}{
    max-width: 110rem;
  }
`;

const Header = ({props}) => {
  return (
    <GobalHeader>
      <Wrapper>
        <Logo />
        <HideOnMobile>
          <MenuLink Icon={FaPoundSign} text="British Pounds" size={20} borderLeft borderRight/>
          <MenuLink image={GBIcon} text="English" />
          <MenuLink Icon={FaEdit} text="Manage Booking" size={20} borderLeft borderRight/>
          <MenuLink Icon={FaUser} text="Sign in" size={20}/>
        </HideOnMobile>
        <HideOnDesktop>
          <MenuLink image={GBIcon} textBefore="GBP" borderRight />
          <FaBars size={20} color="#fff" style={{margin: '0px 1rem'}}/>
        </HideOnDesktop>
      </Wrapper>
    </GobalHeader>
    );
}
 
export default Header;