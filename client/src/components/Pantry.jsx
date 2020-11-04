import React from 'react';
import PantryItem from './PantryItem.jsx'
import styled from 'styled-components';

const PantryWrapper = styled.div `
display:flex;
height: auto;
width: 400px;
background-color: white;
position:relative;
overflow: nowrap;
margin: 10px;
padding: 10px;
justify-content: center;
flex-wrap: wrap;
flex-direction: row;
flex-shrink: 1 2 auto;

`

function Pantry({pantry,addToSearch, deleteFromSearch}) {
// console.log(pantry)
  const listItems = pantry.map((item,index) => <PantryItem key={index} items={item} addToSearch={addToSearch} deleteFromSearch={deleteFromSearch} /> );

  return (

<PantryWrapper>
  {listItems}
</PantryWrapper>
  );
}

export default Pantry;
