import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.div`
display: flex;
flex: 1 1 auto;

height: auto;
width: 400px;
background-color: white;
margin:2px;
padding: 2px;
object-fit: scale-down;
wrap: none;


`
function Step({items}) {


    return (

    <ListWrapper onClick={(event)=>{event.preventDefault();console.log('clicked')}}>
      <div>
      <li>{items.original}</li>
      </div>
      </ListWrapper>

    );
  }

  export default Step;
