import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`

display: flex;
overflow: visible;
flex-shrink: 1 2 auto;
justify-content: center;
flex-direction: column;
flex-shrink: 1 2 auto;
`

const ImageWrapper = styled.div`
display: flex;
flex-shrink: 1 2 auto;
height: 200px;
width: auto;
padding:10px;
border-radius: 25px;
background-color: white;
margin:5px;
padding: 5px;
img{
  border-radius: 25px;
  border: 1px solid black;
  margin: 4px;
}

`
function ResultItem({items}) {


    return (
  <ResultWrapper>
    <ImageWrapper onClick={(event)=>{event.preventDefault();console.log('clicked')}}>
      <img src={items.image}></img><h3>{items.title}</h3>
      </ImageWrapper>

  </ResultWrapper>
    );
  }

  export default ResultItem;
