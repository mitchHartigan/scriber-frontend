import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js'
import Homepage from './components/UserAuth/Homepage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
    }
  }

  componentWillMount() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token && token.length > 5) {
      this.setState({authenticated: true})
    }
  }

  authenticateUser = () => {
    this.setState({authenticated: true})
  }

  handleSignOut = () => {
    localStorage.removeItem('token');
    this.setState({authenticated: false});
  }

  render() {
    if(!this.state.authenticated){
      return (
        <div style={HomepageContainer}>
          <Homepage authenticateUser={this.authenticateUser} />
        </div>
      )
    }
    return (
       <Board handleSignOut={this.handleSignOut} />
    )
  }
}

const HomepageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}

export default App;
