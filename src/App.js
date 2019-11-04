import React, { Fragment } from 'react';
import { GlobalStyles } from './globalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import { device, HideOnMobile } from './sharedStyles';
import Search from './components/Search';
import MenuLink from './atoms/MenuLink';
import { FaCheckCircle } from "react-icons/fa";

const Main = styled.div`
  width: 100vw;
  @media ${device.mobile}{
  }
`;
const SearchBackground = styled.div`
  display: flex;
  flex-direction: column;
  
  @media ${device.mobile}{
    flex-direction: row-reverse;
    margin-top: -37rem;
    padding-top: 5rem;
  }
`;

const InfoContainer = styled.div`

  flex: 1 1 55%;
`;

const Heading = styled.h1`
  font-size: ${props => 
    props.small && '1.2rem' ||
    props.medium === 'medium' && '2.5rem' || 
    '3rem'
  };
  color: ${props => props.white ? '#fff' : '#000'};
  background-color: #096FB9;
  padding: 1rem;
  @media ${device.mobile}{
    font-size: ${props => 
    props.small && '3rem'
    };
    margin-bottom: 1.5rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.mobile}{
    max-width: 110rem;
  }
`;

const BlueBackground = styled.div`
  
  @media ${device.mobile}{
    padding-bottom: 35rem;
    background-color: #096FB9;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Main>
        <Header />
        <BlueBackground />
        <Wrapper>
          <SearchBackground>
            <InfoContainer>
              <Heading small white>Car Hire - Search, Compare & Save</Heading>
              <HideOnMobile column >
                <MenuLink Icon={FaCheckCircle} size={25} text="Price Match Guarantee" marginBottom largeText/>
                <MenuLink Icon={FaCheckCircle} size={25} text="Free Cancellations on most bookings" largeText/>
              </HideOnMobile>
            </InfoContainer>
            <Search />
          </SearchBackground>
        </Wrapper>
      </Main>
    </Fragment>
  );
}

export default App;
