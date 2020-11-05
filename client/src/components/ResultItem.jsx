import React from 'react';
import styled from 'styled-components';
import InstructionCard from './InstructionCard.jsx'

const ResultWrapper = styled.div`

display: flex;
overflow: visible;
flex-shrink: 1 2 auto;
justify-content: center;
flex-direction: row;
flex-shrink: 1 2 auto;
`

const ImageWrapper = styled.div`
display: flex;
flex-shrink: 1 2 auto;
height: auto;
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

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipieInfo: { 'data': { 'extendedIngredients': [{ 'original': 'none' }, { 'original': 'none' }] } },
    }
    this.setInfo = this.setInfo.bind(this)
  }
  setInfo() {
    let winning = "be"
    this.props.addRecipeInfo(this.props.value.id, ((err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results, "this.setinfo!!!!!!!!!!!!!!!")
        this.setState({ recipieInfo: results })
        winning = results
      }
    }))
    console.log(winning, "am i really winning?")
  }
  // this.setState({recipieInfo: info})
  componentDidMount() {
    this.setInfo()
  }

  render() {

    let item = this.props.value
    console.log(item, "items from result!!!!!!!!!!!")

    return (
      <ResultWrapper>
        <ImageWrapper onClick={() => { console.log('clicked the thing'); this.setInfo() }}>
          <img src={item.image}></img>
          <InstructionCard data={this.state.recipieInfo} />
        </ImageWrapper >

      </ResultWrapper>
    );
  }
}
export default ResultItem;


