import React, {Component} from 'react';

class VisibilityBtn extends Component {

  render() { 
    return ( 
      <div>
        <button style={button} onClick={this.props.handleClick}>
          <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
        </button>
      </div>
     );
  }
}

const button = {
  border: 'none',
  padding: '0px',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}
 
export default VisibilityBtn;