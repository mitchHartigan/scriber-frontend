import React, { Component } from 'react';

class FormButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighlighted: this.props.isHighlighted,
    }
  }

  render() { 
    if (this.state.isHighlighted) { 
      return <button style={highlightedFormButtonStyle} onClick={this.props.handleClick}>{this.props.children}</button>
    }
    return <button style={nonHighlightedFormButtonStyle} onClick={this.props.handleClick}>{this.props.children}</button>
  }
}

const nonHighlightedFormButtonStyle = {
  marginTop: '20px',
  marginBottom: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
  width: '100%',
  fontFamily: 'Roboto',
  fontSize: '14pt',
  fontWeight: '500',
  color: 'black',
  backgroundColor: 'white',
  border: '2px solid #2E4A9E',
  borderRadius: '5px',
  cursor: 'pointer',
}

const highlightedFormButtonStyle = {
  marginTop: '20px',
  marginBottom: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
  width: '100%',
  fontFamily: 'Roboto',
  fontSize: '14pt',
  color: 'white',
  backgroundImage: 'linear-gradient(#2E649E, #2E4A9E)',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}
 
export default FormButton;