import React, { Component } from "react";

import {
  FormButton,
  FormAlertText,
  FormInput,
  LoadingSpinner
} from "../molecules";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIsEmpty: false,
      passwordIsEmpty: false,
      passwordIsIncorrect: false
    };
  }

  inputChecker = (email, password) => {
    return new Promise(resolve => {
      if (!email) {
        this.setState({ emailIsEmpty: true }, () => resolve(false));
      } else if (!password) {
        this.setState(
          {
            emailIsEmpty: false,
            passwordIsEmpty: true
          },
          () => resolve(false)
        );
      } else if (password && password.length < 4) {
        this.setState(
          {
            passwordIsEmpty: false,
            passwordIsIncorrect: true
          },
          () => resolve(false)
        );
      } else {
        this.setState({
          emailIsEmpty: false,
          passwordIsEmpty: false,
          passwordIsIncorrect: false
        });
        resolve(true);
      }
    });
  };

  submitForm = evt => {
    evt.preventDefault();

    let form = document.getElementById("loginForm");
    let email = form.elements["email"].value;
    let password = form.elements["password"].value;

    this.inputChecker(email, password).then(inputValid => {
      if (inputValid) {
        this.props.handleSubmit(email, password);
      }
    });
  };

  render() {
    return (
      <form id="loginForm" style={loginForm} onSubmit={this.handleSubmit}>
        <div style={inputContainer}>
          <FormInput
            isErrored={this.state.emailIsEmpty}
            type={"email"}
            name={"email"}
            placeholder={"Email"}
          />
        </div>

        <FormAlertText
          isActive={this.state.emailIsEmpty}
          message={"Please enter your email address."}
        ></FormAlertText>

        <div style={inputContainer}>
          <FormInput
            isErrored={
              this.state.passwordIsEmpty || this.state.passwordIsIncorrect
            }
            type={"password"}
            name={"password"}
            placeholder={"Password"}
          />
        </div>

        <FormAlertText
          isActive={this.state.passwordIsEmpty}
          message={"Please enter your password."}
        ></FormAlertText>

        <FormAlertText
          isActive={this.state.passwordIsIncorrect}
          message={"Password must be longer than 6 characters."}
        ></FormAlertText>

        <FormAlertText
          isActive={this.props.authenticationError}
          message={"Username or password is incorrect."}
        ></FormAlertText>

        <LoadingSpinner waitingForResponse={this.props.waitingForResponse} />

        <FormButton isHighlighted={true} handleClick={this.submitForm}>
          Sign In
        </FormButton>
        <p style={loginRedirect__text}>
          Not signed up yet?
          <button
            style={loginRedirect__btn}
            onClick={this.props.handleRegisterRedirect}
          >
            Create an account.
          </button>
        </p>
      </form>
    );
  }
}

const loginForm = {
  display: "flex",
  flexDirection: "column",
  marginRight: "20px",
  marginLeft: "20px"
};

const inputContainer = {
  marginTop: "20px",
  marginBottom: "10px"
};

const loginRedirect__btn = {
  padding: "0",
  border: "0",
  backgroundColor: "transparent",
  fontFamily: "Roboto",
  fontSize: "11pt",
  marginLeft: "5px",
  textDecoration: "underline",
  color: "#2E649E",
  cursor: "pointer"
};
const loginRedirect__text = {
  fontFamily: "Roboto",
  fontSize: "11pt",
  textAlign: "center"
};
