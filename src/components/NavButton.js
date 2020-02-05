import React, {Component} from 'react';

export default class NavButton extends Component {

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        style={navButtonStyle}
      >
      <img src={this.props.icon} alt="back button"/>
      </div>
    );
  }
}

const navButtonStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EDEDED',
  cursor: 'pointer',
  marginRight: '10px',
  marginLeft: '20px',
  marginTop: '20px',
}