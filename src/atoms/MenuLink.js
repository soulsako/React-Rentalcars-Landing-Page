import React from 'react';
import styled from 'styled-components';


const Link = styled.div`

  display: flex;
  align-items: center;
  padding: 0px 1rem;
  color: #fff;
  border-right: ${props => props.borderRight ? '1px solid hsla(0,0%,100%,.2)' : null};
  border-left: ${props => props.borderLeft ? '1px solid hsla(0,0%,100%,.2)' : null};
  margin-bottom: ${props => props.marginBottom ? '2rem' : null};
  transition: all .2s;
  &:hover {
    opacity: ${props => props.plain ? null : '0.6'};
    cursor: ${props => props.plain ? null : 'pointer'}
  }
`;

const Text = styled.p`
  font-size: ${props => props.largeText ? '2rem' : null};
`;

const Image = styled.img`

  width: 3rem;
  height: 3rem;
  display: block;
`;

const MenuLink = ({Icon, text, image, size, textBefore, borderRight, borderLeft, marginBottom, largeText}) => {
  return (  
    <Link borderRight={borderRight} borderLeft={borderLeft} marginBottom={marginBottom}>
      {textBefore ? <Text>{textBefore}</Text> : null}
      {Icon ? <Icon size={size} style={{marginRight: '.5rem'}}/> : null}
      {image ? <Image src={image} /> : null}
      {text ? <Text largeText={largeText}>{text}</Text> : null}
    </Link>
  );
}
 
export default MenuLink;