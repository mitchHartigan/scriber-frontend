import React, { Component } from 'react';

class Logo extends Component {

  render() { 
    return (
      <div style={logoContainer}>
        <img 
          src={this.props.logoSrc} 
          alt="quill by artworkbean from the Noun Project"
          height="170"
        />
      </div>
     );
  }
}

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default Logo;