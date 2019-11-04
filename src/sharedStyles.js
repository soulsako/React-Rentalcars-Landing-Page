import styled, {css} from 'styled-components';

/*========MEDIA QUERY=========*/

const size = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px'
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`
};

/*=========SHARED STYLES========*/

 export const HideOnMobile = styled.div`
  display: ${props => props.column ? null : 'flex'};
  @media (max-width: 600px){
    display: none;
  }
`;

export const HideOnDesktop = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobile} {  
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: ${props => props.marginRight ? '1rem' : null};
  flex: ${props => props.fullWidth ? '1 1 0' : null};
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: .5rem;
  font-size: 1.3rem;
`;

export const Text = styled.p`

  font-size: ${props => props.large ? '3.5rem' : '1.3rem'};
  margin-right: ${props => props.large ? '1rem' : null};
  ${props => props.medium && 
  css`
    font-size: 2rem;
    padding: 1.5rem 0px;
  `}
`;

export const Button = styled.button`

  cursor: pointer;
  background-color: #00874D;
  font-size: 2.5rem;
  border-radius: 3px;
  color: #fff;
  border: 2px solid #00874D;
  padding: 1rem 3rem;
  transition: 0.5s all ease-out;
  width: 100%;

  &:hover {
    opacity: .8;
  }
`;

  