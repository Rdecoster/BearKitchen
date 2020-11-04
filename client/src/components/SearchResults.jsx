import React from 'react';
import styled from 'styled-components';
import ResultItem from './ResultItem.jsx';


const ResultsWrapper = styled.div`
display: flex;

flex-shrink: 1 2 auto;
justify-content: flex-start;
flex-wrap: wrap;
flex-direction: column;
flex-shrink: 1 2 auto;

`

function SearchResults({data}) {
  // console.log(data)
    const listIngredients = data.recipeInfo
    const listItems = data.searchResults.map((item,index) => <ResultItem key={index} items={item} data={listIngredients}/> );

    return (
  <ResultsWrapper>
    <div>{listItems}</div>
  </ResultsWrapper>
    );
  }

  export default SearchResults;
