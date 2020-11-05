import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
display:flex;
flex-shrink: 1 1 auto;
justify-content: start;
background-color: white;

flex-direction: row;
`


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isLoggedIn: false,
      value: ''
    };
  }

  handleLoginClick(event) {
    event.preventDefault()
    this.setState({ isLoggedIn: true });
    this.props.setUser(this.state.value)

  }

  handleLogoutClick(event) {
    event.preventDefault()
    this.setState({ isLoggedIn: false });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button =
        <div>
          <form>
            <label>
              User:
                    <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </form>
          <LoginButton onClick={this.handleLoginClick} />
        </div>;
    }

    return (
      <LoginWrapper>
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      </LoginWrapper>
    );
  }
}

function UserGreeting(props) {
  return <h4>Welcome!</h4>;
}

function GuestGreeting(props) {
  return <h4>Please sign in.</h4>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LoginControl;
