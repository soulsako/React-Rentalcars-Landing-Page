import React from 'react';
import ReactDOM from 'react-dom'; 
import styled from 'styled-components';
import { InputContainer, Label, Text, Button, device } from '../sharedStyles';
import DateInput from '../atoms/DateInput';
import SearchResults from '../components/SearchResults';
import Api from '../api';

const Container  = styled.div`

padding: 1rem;
background-color: #f3ce56;
width: 100%;
@media ${device.mobile} {
    box-shadow:0 2px 4px rgba(0, 0, 0, .4);
    border-radius: 3px;
    flex: 1 1 45%;
    margin-right: 5rem;
  }
`;

const Input = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 1.5rem;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 1.4rem;
  font-weight: 300;
  background: #fafafa;
  width: 100%;
  &:active,
  &:focus {
    text-align: left;
  }
`;

const CheckboxInput = styled.input`
  margin-right: .5rem;
`;

const PickerContainer = styled.div`

  display: flex;
  align-items:center;
  justify-content: ${props => props.checkbox ? 'flex-start' : 'space-between'};
  margin: ${props => props.checkbox ? '1.5rem 0px' : null};
`;

const Heading = styled.h1`
padding: 1rem 0px 2.5rem 0px;
color: ${props => props.white ? '#fff' : '#000'};
`;

class Search extends React.Component {

  state = {
    searchTerm: "", 
    searchResults: null, 
    showResults: true
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value}, this.fetchData);
  }

  fetchData = async () => {
    const { searchTerm } = this.state;
    if(searchTerm.length < 2) return;
    const searchResults = await Api.http({
      results: 6,
      searchTerm: searchTerm
    });
    this.setState({searchResults, showResults: true});
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false); 
  }

  // Unbind event on unmount to prevent leaks
  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside = (event) => {
    if(!ReactDOM.findDOMNode(this).contains(event.path[0])){
       this.setState({showResults: false})
    }
  }

  render(){
    const { searchTerm, searchResults, showResults } = this.state;
    return (  
      <Container> 
        <Heading>Lets find your ideal car</Heading>

        <InputContainer ref={(node) => this.setWrapperRef = node}>
          <Label>Pick-up Location</Label>
          <Input type="text" placeholder="city, airport, station, region, district" value={searchTerm} onChange={this.onSearchHandler}/>
          {!searchResults && searchTerm.length > 1 && <Text medium>No results found</Text>}
          {showResults && searchResults && searchTerm.length > 1 && <SearchResults searchResults={searchResults}/>}
        </InputContainer>

        <PickerContainer checkbox>
          <CheckboxInput type="checkbox" />
          <Text>Drop off car at different location</Text>
        </PickerContainer>

        <PickerContainer>
          <DateInput label="Pick up Date:" date="5" month="Nov" day="Tue" time="10:00" marginRight={true}/>
          <DateInput label="Drop off Date:" date="8" month="Nov" day="Fri" time="10:00"/>
        </PickerContainer>

        <PickerContainer checkbox>
          <CheckboxInput type="checkbox" defaultChecked />
          <Text>Driver aged between 30-65?</Text>
        </PickerContainer>

        <Button>Search</Button>
      </Container>
     );
  }
}
 
export default Search;