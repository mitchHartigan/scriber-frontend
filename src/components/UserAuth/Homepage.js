import React, {Component} from 'react';
import Greeting from './Greeting';
import Login from './Login/Login';
import Register from './Register/Register';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authenticated: false,
      redirectToRegister: false,
      redirectToLogin: false,
      redirectToGreeting: true,
    }
  }

  authenticateUser = () => {
    this.props.authenticateUser();
  }


  handleRegisterRedirect = () => {
    this.setState({
      redirectToRegister: true,
      redirectToLogin: false,
      redirectToGreeting: false,
    })
  }

  handleLoginRedirect = () => {
    this.setState({
      redirectToRegister: false,
      redirectToLogin: true,
      redirectToGreeting: false,
    }, ()=> {
    })
  }

  handleGreetingRedirect = () => {
    this.setState({
      redirectToRegister: false,
      redirectToLogin: false,
      redirectToGreeting: true,
    })
  }

  render() {
    if(this.state.redirectToRegister){ 
      return (
        <div style={HomepageElem}>
          <Register
            handleGreetingRedirect={this.handleGreetingRedirect}
            handleLoginRedirect={this.handleLoginRedirect}
            authenticateUser={this.authenticateUser}
          />
        </div>
      );
    }

     if(this.state.redirectToLogin){
      return ( 
        <div style={HomepageElem}>
          <Login
            handleGreetingRedirect={this.handleGreetingRedirect}
            handleRegisterRedirect={this.handleRegisterRedirect}
            authenticateUser={this.authenticateUser}
          />
        </div>
      )
    }
    
    if (this.state.redirectToGreeting)
    return (
      <div style={HomepageElem}>
        <Greeting
         handleRegisterRedirect={this.handleRegisterRedirect}
         handleLoginRedirect={this.handleLoginRedirect}
        />
      </div>
     );
  }
}

const HomepageElem = { 
  display: 'flex',
  width: '100%',
  height: '100%',
  paddingLeft: '30vw',
  paddingRight: '30vw',
  alignItems: 'center',
  justifyContent: 'center',
}
 
export default Homepage;