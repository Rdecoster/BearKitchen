import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pantry from './Pantry.jsx';
import dummy from '../../../data/data.js';
import SearchResults from './SearchResults.jsx';
import AddForm from './AddForm.jsx';


const Wrapper = styled.div`
height: 900px;
width: 500x;
background-image: url("background.jpg");
display: flex;

flex-shrink: 1 2 auto;
justify-content: center;

left: 50%;
`;

const Button =styled.button`
  background-color: grey
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 500;
  border-radius: 25px;

`

const dummyData = dummy.searchResults;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pantry:['bananas', 'apples', 'cheese', 'crackers'],
      ingredientSearch:[],
      searchResults: dummyData,
    };
    this.addToPantry = this.addToPantry.bind(this)

  }

addToPantry(item){
this.setState({pantry: [...this.state.pantry,item]})
}



  render() {


    return (

      <Wrapper>
        <div>
         <AddForm addToPantry={this.addToPantry}/>
        Pantry
        <Pantry pantry={this.state.pantry}/>
        <Button>Search Recipes</Button>
        <SearchResults data={this.state.searchResults}/>

        </div>
      </Wrapper>
    );
  }
}

export default App;
