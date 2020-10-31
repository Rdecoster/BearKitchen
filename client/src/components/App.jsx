import React from 'react';
import axios from 'axios';
import styled from 'styled-components';




const Wrapper = styled.div`
height: 900px;
width: auto;
position: absolute;
display: flex;
overflow: visible;
flex-shrink: 1 2 auto;
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };

  }

  render() {


    return (

      <Wrapper>
      <h1>Hello</h1>
      </Wrapper>
    );
  }
}

export default App;
