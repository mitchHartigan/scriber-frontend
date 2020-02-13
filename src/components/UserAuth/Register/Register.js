import React, { Component } from 'react';

import { NavButton }   from '../molecules';
import backArrow from '../../../images/backArrow.svg';
import RegistrationForm from './RegistrationForm';
import { register } from '../../../utilities';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      authenticated: false,
      authenticationError: false,
      attemptingRegister: false,
    }
  }

  backButton = () => {
    this.setState({backButtonClicked: true});
  }

  handleRegister = (firstName, lastName, email, password ) => {
    this.setState({attemptingRegister: true}, ()=> {
      register(firstName, lastName, email, password)
      .then(async (res)=> {
        if(res.status === 200) {
          const token = await res.json();
          localStorage.setItem('token', JSON.stringify(token));
          this.props.authenticateUser();
        } else {
          this.setState({authenticationError: true, attemptingRegister: false})
        }
      })
    })
  }

  render() {
    return (
      <div style={registrationForm__container}>
        <NavButton handleClick={this.props.handleGreetingRedirect} icon={backArrow}></NavButton>
        
        <div style={registrationForm}>
          <p style={registrationForm__signUpText}>
            Sign Up For Free
          </p>
          <RegistrationForm
            handleSubmit={this.handleRegister}
            handleLoginRedirect={this.props.handleLoginRedirect}
            authenticationError={this.state.authenticationError}
            waitingForResponse={this.state.attemptingRegister}
          />
        </div>
      </div>
    );
  }
}

const registrationForm = {
  marginTop: '10px',
  backgroundColor: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  borderRadius: '10px',
  paddingBottom: '20px',
}

const registrationForm__container = { 
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '5px',
  boxShadow: '4px 5px 7px #333333',
}

const registrationForm__signUpText = {
  fontFamily: 'Merriweather',
  fontSize: '22pt',
  marginBottom: '30px',
  marginTop: '10px',
  paddingTop: '15px',
  textAlign: 'center',
}
 
export default Register;