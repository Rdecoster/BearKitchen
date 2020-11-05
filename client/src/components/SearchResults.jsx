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

function SearchResults(props) {
  console.log(props, "props")
  const items = props.data
  console.log(items, "my items")
  const listIngredients = []


  return (
    // <ResultsWrapper>
    <div>
      {  items.map((thing, index) =>
        <div>
          <ResultItem key={index + index} value={thing} addRecipeInfo={props.addRecipeInfo} />
        </div>
      )
      }
    </div>

    // </ResultsWrapper>
  );
}

export default SearchResults;
