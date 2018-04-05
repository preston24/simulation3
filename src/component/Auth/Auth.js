import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  logUserIn = () => {
    
  }

  registerUser = () => {

  }

  render() {
    console.log(this.state.username)
    return (
      <div>
        Auth
        <h3> Username: </h3>
        <input onChange={this.handleChangeUsername}></input>
        <h3> Password: </h3>
        <input type="password" onChange={this.handleChangePassword}></input>
        <button onClick={this.logUserIn}> Login </button>
        <button onClick={this.registerUser}> Register </button>
      </div>
    );
  }
}

export default Auth;