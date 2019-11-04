import React from 'react';
import { InputContainer, Label, Text } from '../sharedStyles';
import styled from 'styled-components';

const Picker = styled.div`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3.5rem;
  width: 100%;
  margin-top: ${props => props.small ? '.5rem' : null};
  font-size: 1.2rem;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DateInput = ({label, date, month, day, time, marginRight}) => {
  return ( 
    <InputContainer fullWidth marginRight={marginRight}>
      <Label>{label}</Label>
        <Picker>
          <Text large>{date}</Text>
          <DateContainer>
            <Text>{month}</Text>
            <Text>{day}</Text>
          </DateContainer>
        </Picker>
      <Picker small>{time}</Picker>
    </InputContainer>
   );
}
 
export default DateInput;