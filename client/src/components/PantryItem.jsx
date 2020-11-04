import React from 'react';
import styled from 'styled-components';
const ItemWrapper = styled.div `

height: 20px;
width: auto;
margin: 10px;
background-color: green;
display: flex;
overflow: visible;
/* flex-shrink: 1 2 auto; */
justify-content: flex-start;
padding: 4px;
flex-wrap: wrap;


`


class PantryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,

    };
this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({isSelected: !this.state.isSelected});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const item= this.props.items;
    // console.log(item)
    return (

      <ItemWrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="checkbox" checked={this.state.isSelected} onChange={this.handleChange} />
          </label>{item}
        </form>
      </ItemWrapper>

    );
  }
}

export default PantryItem;