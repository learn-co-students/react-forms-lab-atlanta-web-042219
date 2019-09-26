import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    if(e.target.id === "username"){
      this.setState({username: e.target.value})
      // console.log(this.state.username)
    }
    else if(e.target.id === "password"){
      this.setState({password: e.target.value})
      // console.log(this.state.password)
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) 
    return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={e => this.handleLogin(e)}>
        <div>
          <label>
            Username
            <input id="username" onChange={e => this.handleChange(e)} value={this.state.username}name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={e => this.handleChange(e)} value={this.state.password}name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
