import React from 'react';
class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const {addToPantry} = this.props
    alert('An essay was submitted: ' + this.state.value);
    addToPantry(this.state.value)
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>

          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add To Pantry" />
      </form>
    );
  }
};

export default AddForm;