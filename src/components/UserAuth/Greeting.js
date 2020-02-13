import React, {Component} from 'react';
import { FormButton, Logo } from './molecules';
import scriberLogo from '../../images/scriber.png';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>

      <div style={homepageParentContainer}>
        <div style={homepageElemContainer}>
        <Logo logoSrc={scriberLogo} />
          <div style={headerTextContainer}>
            <h4 style={headerText}>Introducing <i>Scriber</i>.</h4>
          </div>
          <div style={descriptionTextContainer}>
            <p style={descriptionText}>A minimalist way to keep track of what's important.</p>
          </div>
          <div style={buttonContainer}>
            <FormButton isHighlighted={true} handleClick={this.props.handleRegisterRedirect}>Try for Free</FormButton>
          </div>
          
          <p style={orText}>- or -</p>

          <div style={buttonContainer}>
            <FormButton isHighlighted={false} handleClick={this.props.handleLoginRedirect}>Sign In</FormButton>
          </div>
        </div>
      </div>      

      </div>
     );
  }
}

const homepageParentContainer = {
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '5px',
  boxShadow: '4px 5px 5px #333333',
}

const homepageElemContainer = {
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '0px',
  paddingBottom: '30px',
  paddingTop: '20px',
  borderRadius: '10px',
  backgroundColor: 'white',
}

const headerText = {
  fontFamily: 'Merriweather',
  fontSize: '30pt',
  margin: '0px',
  paddingTop: '20px',
  letterSpacing: '1px',
  marginBottom: '0px',
  textAlign: 'center',
}

const headerTextContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const descriptionTextContainer = {
  marginTop: '20px',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
}

const descriptionText = {
  fontFamily: 'Roboto',
  fontSize: '16pt',
  letterSpacing: '1px',
  lineHeight: '28px',
  marginBottom: '0px',
  marginTop: '0px',
}

const buttonContainer = {
  marginRight: '20px',
  marginLeft: '20px',
}

const orText = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '16pt',
  margin: '0px',
}
 
export default Greeting;