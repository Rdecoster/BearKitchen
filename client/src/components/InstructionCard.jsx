import React from 'react';
import Step from './Step.jsx'
import styled from 'styled-components';

const PantryWrapper = styled.div`
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

function InstructionCard(props) {
  console.log(props, "my props from instructioncard")
  console.log(props.data.data, "myprops data")
  const ingredientInfo = props.data.data.extendedIngredients



  return (

    <PantryWrapper>
      <div>
        {ingredientInfo.map((item, index) => <div><Step key={index} items={item} /></div>)
        }
      </div>
    </PantryWrapper>
  );
}

export default InstructionCard;
