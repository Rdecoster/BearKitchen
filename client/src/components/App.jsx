import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pantry from './Pantry.jsx';
import dummy from '../../../data/data.js';
import SearchResults from './SearchResults.jsx';
import AddForm from './AddForm.jsx';
import InstructionCard from './InstructionCard.jsx'
import LoginControl from './LoginControl.jsx'
const Wrapper = styled.div`
height: 100%;
width: 1400x;
background-image: url("background.jpg");
background-size: fill;
display: flex;

flex-shrink: 1 2 auto;
justify-content: center;
left: 50%;
`;

const Header = styled.div `
display:flex;
flex-shrink: 1 2 auto;
justify-content: center;
height: 100px;
width: 100%;
background-color: white;
margin: 50px;
border-radius: 25px;
flex-direction: row;
`

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
const dummyIngredients = dummy.amount

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pantry:[],
      ingredientSearch:[],
      searchResults: dummyData,
      recipeInfo: dummyIngredients,
      user: '',
    };
    this.addToPantry = this.addToPantry.bind(this);
    this.setUser = this.setUser.bind(this);
    this.addToSearch = this.addToSearch.bind(this);
    this.deleteFromSearch = this.deleteFromSearch.bind(this)
  }

addToPantry(item){
this.setState({pantry: [...this.state.pantry,item]})



 axios.post('/user', {
  params: {
    user_id : this.state.user,
    pantry : item
  }
})

.then((results)=>{
  consol.log(results,'Resutlts add to pantry')
})
.catch((err)=>{
  throw err
  console.log(err,"we had an error on add to pantry")
})
}

setUser(input){
  this.setState({user: input})
  axios.get('/getPantry',{
    params:{user: input}
  })
  .then((results)=>{
    console.log(results)
    const data = results.data
    if (data.length !== undefined) {
      var array = []
    data.forEach((item)=>{
      array.push(item.pantry)
    })
    this.setState({pantry:array})
  }
  })
  .catch((err)=>{
    console.log(err)
  })
}

addToSearch(input){
  this.setState({ingredientSearch: [...this.state.ingredientSearch,input]})
}

deleteFromSearch(input){
  let array = this.state.ingredientSearch;
  let index = array.indexOf(array);
  console.log(index)
  console.log(array, "Array from delete from search")
  if(index !== 0) {
    array.splice(index,1)
    console.log(array,"array from delete from search after splice")
    this.setState({ingredientSearch: array})
  }

}
SearchPantry(){
  axios('/search')
}

  render() {


    return (

      <Wrapper>
        <div>
          <Header>
            <LoginControl setUser={this.setUser}/>
          </Header>
         <AddForm addToPantry={this.addToPantry}/>
        Pantry
        <Pantry pantry={this.state.pantry} addToSearch={this.addToSearch} deleteFromSearch={this.deleteFromSearch}/>
        <Button>Search Recipes</Button>
        <SearchResults data={this.state}/>

        </div>
      </Wrapper>
    );
  }
}

export default App;
