import React, { Component } from "react";

import LoginForm from "./LoginForm";
import { NavButton } from "../molecules";
import backArrow from "../../../images/backArrow.svg";
import { login } from "../../../utilities";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      authenticated: false,
      authenticationError: false,
      authenticationErrorMsg: "",
      attemptingSignIn: false
    };
  }

  backButton = () => {
    this.setState({ backButtonClicked: true });
  };

  handleLogin = (email, password) => {
    this.setState({ attemptingSignIn: true }, () => {
      login(email, password).then(async res => {
        if (res.status === 200) {
          const token = await res.json();
          localStorage.setItem("token", JSON.stringify(token));
          this.props.authenticateUser();
        } else {
          this.setState({ authenticationError: true, attemptingSignIn: false });
        }
      });
    });
  };

  render() {
    return (
      <div style={login__redirectButton}>
        <NavButton
          handleClick={this.props.handleGreetingRedirect}
          icon={backArrow}
        ></NavButton>
        <div>
          <div style={login__form}>
            <p style={login__formText}>Log In</p>
            <LoginForm
              handleSubmit={this.handleLogin}
              authenticationError={this.state.authenticationError}
              authenticationErrorMsg={this.state.authenticationErrorMsg}
              handleRegisterRedirect={this.props.handleRegisterRedirect}
              waitingForResponse={this.state.attemptingSignIn}
            />
          </div>
        </div>
      </div>
    );
  }
}

const login__formText = {
  fontFamily: "Merriweather",
  fontSize: "22pt",
  marginTop: "5px",
  marginBottom: "5px",
  textAlign: "center"
};

const login__redirectButton = {
  backgroundColor: "white",
  width: "600px",
  borderRadius: "5px",
  boxShadow: "4px 5px 5px #333333"
};

const login__form = {
  backgroundColor: "white",
  marginRight: "20px",
  marginLeft: "20px",
  paddingBottom: "20px",
  paddingTop: "5px"
};
