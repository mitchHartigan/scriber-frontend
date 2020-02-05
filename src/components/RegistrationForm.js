import React, { Component } from 'react';
import FormButton from '../components/FormButton';
import FormAlertText from '../components/FormAlertText';
import FormInput from '../components/FormInput';
import VisibilityBtn from '../components/VisibilityBtn';
import eye from '../images/eye.png';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      emailIsEmpty: false,
      passwordIsEmpty: false,
      passwordIsIncorrect: false,
      passwordVisibility: 'password',
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;


    this.inputChecker(email, password)
      .then((inputValid)=> {
        console.log('inputValid returned')
        console.log('inputValid value: ', inputValid)
        if(inputValid) {
          this.props.handleSubmit(firstName, lastName, email, password);
        }
      })
  }

  submitForm = () => {
    document.getElementById('registrationForm').submit();
  }

  togglePasswordVisibilty = (evt) => {
    evt.preventDefault();
    if (this.state.passwordVisibility==='password'){
      this.setState({passwordVisibility: 'text'});
    } else {
      this.setState({passwordVisibility: 'password'})
    }
  }

  inputChecker = (email, password) => {
    console.log('inputChecker fired');
    return new Promise((resolve) => {
      if (!email) {
        console.log('email is empty!')
        this.setState({emailIsEmpty:true}, ()=> resolve(false));
      }

      else if (!password) {
        console.log('password is empty!')
        this.setState({
          emailIsEmpty: false,
          passwordIsEmpty: true
        }, ()=> resolve(false));
      }
      
      else if (password && password.length < 6) {
        this.setState({
          passwordIsEmpty: false,
          passwordIsIncorrect: true,
        },()=> resolve(false));

      } else {
        this.setState({
          emailIsEmpty: false,
          passwordIsEmpty: false,
          passwordIsIncorrect: false,
        })
        resolve(true);
      }
    })
  };

  render() {
    return (
      <form id="registrationForm" onSubmit={this.handleSubmit} style={registrationForm}>
        <div style={nameInputContainer}>
          <input style={firstNameInput} type='text' name='firstName' placeholder='First Name' />
          <input style={lastNameInput} type='text' name='lastName' placeholder='Last Name' />
        </div>
        <div style={inputContainer}>

          <FormInput isErrored={this.state.emailIsEmpty}
           type={'email'}
           name={'email'}
           placeholder={'Email'} 
          />
        </div>

        <FormAlertText isActive={this.state.emailIsEmpty}
          message={'Please enter your email address.'}
        ></FormAlertText>

        <div style={passwordInputContainer}>
          <div style={passwordInput}>
            <FormInput
              isErrored={this.state.passwordIsEmpty || this.state.passwordIsIncorrect || this.state.passwordsDoNotMatch}
              type={this.state.passwordVisibility}
              name={'password'}
              placeholder={'Password'}
            />
          </div>
        <VisibilityBtn
          imgSrc={eye}
          imgAlt={'Eye by ignation from the Noun Project'}
          handleClick={this.togglePasswordVisibilty}
        />
        </div>

        <FormAlertText isActive={this.state.passwordIsEmpty}
          message={'Please enter a password.'}
        ></FormAlertText>

        <FormAlertText isActive={this.state.passwordIsIncorrect}
          message={'Password must be longer than 6 characters.'}
        ></FormAlertText>

        <FormAlertText isActive={this.props.authenticationError}
          message={"Looks like you've already got an account. Try signing in instead."}
        ></FormAlertText>
        
        <FormButton isHighlighted={true} onClick={this.submitForm}>Create New Account</FormButton>
        
        <p style={loginRedirectText}>Already signed up?
          <button style={loginRedirectBtn} onClick={this.props.handleLoginRedirect}>Log In.</button>
        </p>

      </form>
    );
  }
}

const loginRedirectBtn = {
  padding: '0',
  border: '0',
  backgroundColor: 'transparent',
  fontFamily: 'Roboto',
  fontSize: '11pt',
  marginLeft: '5px',
  textDecoration: 'underline',
  color: '#2E649E',
  cursor: 'pointer',
}

const registrationForm = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
  marginRight: '20px',
}
const loginRedirectText = { 
  fontFamily: 'Roboto',
  fontSize: '11pt',
  textAlign: 'center',
}

const nameInputContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '10px',
}

const firstNameInput = {
  width: '50%',
  marginRight: '10px',
  fontSize: '12pt',
  paddingTop: '10px',
  paddingLeft: '12px',
  paddingBottom: '10px',
  borderColor: '#2E649E',
  borderRadius: '5px',
}

const lastNameInput = {
  width: '50%',
  fontSize: '12pt',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '12px',
  borderColor: '#2E649E',
  borderRadius: '5px',
}

const inputContainer = {
  marginTop: '20px',
  marginBottom: '10px',
}

const passwordInputContainer = {
  display: 'flex',
  marginTop: '20px',
  marginBottom: '-10px',
}

const passwordInput = {
  width: '100%',
}