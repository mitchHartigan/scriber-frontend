import React, { Component } from 'react';
import NavButton  from '../components/NavButton';
import backArrow from '../images/backArrow.svg';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../utilities';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      authenticated: false,
      authenticationError: false,
    }
  }

  backButton = () => {
    this.setState({backButtonClicked: true});
  }

  handleRegister = (firstName, lastName, email, password ) => {
    register(firstName, lastName, email, password)
      .then(async (res)=> {
        if(res.status === 200) {
          const token = await res.json();
          localStorage.setItem('token', JSON.stringify(token));
          this.props.authenticateUser();
        } else {
          this.setState({authenticationError: true})
        }
      })
  }

  render() {

    return (
      <div style={registerScreenElem}>
        <NavButton handleClick={this.props.handleGreetingRedirect} icon={backArrow}></NavButton>
        
        <div style={registrationForm}>
          <p style={signUpHeaderText}>
            Sign Up For Free
          </p>
          <RegistrationForm
            handleSubmit={this.handleRegister}
            handleLoginRedirect={this.props.handleLoginRedirect}
            authenticationError={this.state.authenticationError}
          />
        </div>
      </div>
    );
  }
}

const signUpHeaderText = {
  fontFamily: 'Merriweather',
  fontSize: '22pt',
  marginBottom: '30px',
  marginTop: '10px',
  paddingTop: '15px',
  textAlign: 'center',
}

const registerScreenElem = { 
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '5px',
  boxShadow: '4px 5px 7px #333333',
}

const registrationForm = {
  marginTop: '10px',
  backgroundColor: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  borderRadius: '10px',
  paddingBottom: '20px',
}
 
export default Register;