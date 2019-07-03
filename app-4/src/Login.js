import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChangeUsername(name) {
    this.setState({ username: name });
  }
  handleChangePassword(pass) {
    this.setState({ password: pass });
  }
  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChangeUsername(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.handleChangePassword(e.target.value)}
          type="text"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
