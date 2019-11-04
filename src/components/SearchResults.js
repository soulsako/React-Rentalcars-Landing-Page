import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 69px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #eee;
  z-index: 9999;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  transition: all .1s;

  &:hover {
    background-color: #AED6F1;
  }
  &:not(:last-child){
    border-bottom: 1px solid #ddd;
  }
`;

const Badge = styled.div`

  background-color: ${props => props.id === 'City' ? '#01b4ff' : '#EC7063'};
  color: #fff;
  padding: .5rem;
  width: 15%;
  text-align: center;
  margin-right: 1rem;
`;

const DetailsContainer = styled.div`
 
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

const Location = styled.div`
 color: #555;
`;

const SearchResults = ({searchResults}) => {
  if(searchResults.length < 1) return;
  return (
    <Container>
      {searchResults.map(result => (
        <ListItem key={result.placeKey} {...result} />
      ))}
    </Container>
  )
}

export default SearchResults;

const ListItem = (props) => {
  let bookingId = ""
  if(props.bookingId && props.bookingId.includes('-')){
    bookingId = props.bookingId.split('-')[0];
  }
  const sanitizeBookingId = bookingId.charAt(0).toUpperCase() + bookingId.slice(1);
  return (
    <ListContainer>
      {sanitizeBookingId ? <Badge id={sanitizeBookingId}>{sanitizeBookingId}</Badge> : null}
      <DetailsContainer>
        <Name>{props.name}{props.iata ? (props.iata) : null}</Name>
        <Location>{props.region}, {props.country}</Location>
      </DetailsContainer>
    </ListContainer>
  )
}