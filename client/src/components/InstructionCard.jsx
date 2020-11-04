import React from 'react';
import Step from './Step.jsx'
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
justify-content: start;
flex-wrap: wrap;
flex-direction: row;
flex-shrink: 1 1 auto;
overflow-y: none;

`

function InstructionCard({data}) {
// console.log(data)
const ingredientInfo = data.extendedIngredients
  const listItems = ingredientInfo.map((item,index) => <Step key={index} items={item} /> );

  return (

<PantryWrapper>

  {listItems}

</PantryWrapper>
  );
}

export default InstructionCard;
