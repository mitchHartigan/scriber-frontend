import React, {Component} from 'react';
import LoginForm from './LoginForm';
import NavButton from './NavButton';
import backArrow from '../images/backArrow.svg';
import {login} from '../utilities';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      authenticated: false,
      authenticationError: false,
      authenticationErrorMsg: '',
     }
  }

  backButton = () => {
    this.setState({backButtonClicked: true})
  };

  handleLogin = (email, password) => {
    login(email, password)
      .then(async (res)=> {
        if (res.status === 200) {
          const token = await res.json();
          localStorage.setItem('token', JSON.stringify(token));
          this.props.authenticateUser();
        } else {
          this.setState({ authenticationError: true })
        }
      })
  }

  render() {
    return (
      <div style={loginScreenElem}>
        <NavButton handleClick={this.props.handleGreetingRedirect} icon={backArrow}></NavButton>
        <div>
          <div style={loginForm}>
            <p style={loginText}>
              Log In
            </p>
            <LoginForm
              handleSubmit={this.handleLogin}
              authenticationError={this.state.authenticationError}
              authenticationErrorMsg={this.state.authenticationErrorMsg}
              handleRegisterRedirect={this.props.handleRegisterRedirect}
            />
          </div>
        </div>
      </div>
      );
  }
}

const loginText = {
  fontFamily: 'Merriweather',
  fontSize: '22pt',
  marginTop: '5px',
  marginBottom: '5px',
  textAlign: 'center',
}

const loginScreenElem = {
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '5px',
  boxShadow: '4px 5px 5px #333333',
}

const loginForm = {  
  backgroundColor: 'white',
  marginRight: '20px',
  marginLeft: '20px',
  paddingBottom: '20px',
  paddingTop: '5px',
}
 
export default Login;