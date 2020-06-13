import React, { Component } from "react";
import InputField from "../input-field/input-field.component";
import ButtonField from "../button-field/button-field.component";

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
          <InputField
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
          />

          <InputField
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
          />

          <ButtonField>Submit</ButtonField>
        </form>
      </div>
    );
  }
}

export default SignIn;
