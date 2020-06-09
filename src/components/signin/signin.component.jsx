import React, { Component } from "react";

import "./signin.styles.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in-page">
        <div>I alrady have an account</div>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id="user-email"
            onChange={this.handleChange}
          />
          <label htmlFor="user-email">Email</label>

          <input
            type="password"
            name="password"
            id="user-pass"
            onChange={this.handleChange}
          />
          <label htmlFor="user-pass">Password</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
