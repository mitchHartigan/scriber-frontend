import React, { Component } from 'react';

class FormAlertText extends Component {

  render() {
    if (this.props.isActive) {
      return <span style={FormAlertTextActive}>{this.props.message}</span>
    } else {
      return <span style={FormAlertTextInactive}>{this.props.message}</span>
    }
  }
}

const FormAlertTextActive = {
  fontFamily: 'Roboto',
  color: '#eb0000',
  fontSize: '12pt',
  textAlign: 'center',
  marginTop: '10px',
  animationName: 'alertAnim',
  animationDuration: '0.4s',
  animationTimingFunction: 'ease-in-out',
}

const FormAlertTextInactive = {
  display: 'none',
}

export default FormAlertText;