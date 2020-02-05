import React, {Component} from 'react';

class AddNoteBtn extends Component {
  render() { 
    return (  
      <div>
        <button 
          onClick={this.props.handleClick}
          style={plusButton}
        > + </button>
      </div>
    );
  }
}

export default AddNoteBtn;

const plusButton = {
  borderRadius: '100%',
  width: '60px',
  height: '60px',
  float: 'left',
  marginTop: '15px',
  marginLeft: '15px',
  outline: 'none',
  border: 'none',
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '34pt',
  fontWeight: '100',
  backgroundColor: '#2374AB',
  cursor: 'pointer',
}