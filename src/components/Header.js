import React, {Component} from 'react';
import AddNoteBtn from './AddNoteBtn';

class Header extends Component {
  render() {
    return ( 
      <div style={signOutBtnParent}>
        <AddNoteBtn handleClick={this.props.addNoteBtn} />
        <button
          style={signOutBtn}
          onClick={this.props.handleSignOut}
        >
          Sign Out
        </button>
      </div>
     );
  }
}

const signOutBtn = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontFamily: 'Roboto',
  paddingTop: '20px',
  paddingRight: '15px',
  fontSize: '12pt',
  color: 'white',
  cursor: 'pointer',
}

const signOutBtnParent = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
 
export default Header;