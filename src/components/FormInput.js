import React, { Component } from 'react';

class FormInput extends Component {
  render() {
    if (!this.props.isErrored) {
      return (
        <div>
          <input style={inputElem} type={this.props.type}
           name={this.props.name} placeholder={this.props.placeholder}
          />
        </div>
       );

    } else {
      return (
        <div>
          <input style={erroredInputElem} type={this.props.type}
           name={this.props.name} placeholder={this.props.placeholder}
          />
        </div>
       );
    }
  }
}

const inputElem = {
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '12pt',
  paddingTop: '10px',
  borderColor: '#2E649E',
  borderRadius: '5px',
  paddingLeft: '12px',
  paddingBottom: '10px',
}

const erroredInputElem = {
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '12pt',
  paddingTop: '10px',
  borderColor: '#eb0000',
  borderRadius: '5px',
  paddingLeft: '12px',
  paddingBottom: '10px',
}

 
export default FormInput;