import React from 'react';
import { FormButton, Logo } from './molecules';
import scriberLogo from '../../images/scriber.png';

export default function Greeting (props) {
    return ( 
      <div>
      <div style={homepage__parent}>
        <div style={homepage}>
        <Logo logoSrc={scriberLogo} />
          <div style={homepage__headerTextContainer}>
            <h4 style={homepage__headerText}>Introducing <i>Scriber</i>.</h4>
          </div>
          <div style={homepage__descriptionTextContainer}>
            <p style={homepage__descriptionText}>A minimalist way to keep track of what's important.</p>
          </div>
          <div style={homepage__buttonContainer}>
            <FormButton isHighlighted={true} handleClick={props.handleRegisterRedirect}>Try for Free</FormButton>
          </div>
          
          <p style={homepage__orText}>- or -</p>

          <div style={homepage__buttonContainer}>
            <FormButton isHighlighted={false} handleClick={props.handleLoginRedirect}>Sign In</FormButton>
          </div>
        </div>
      </div>      

      </div>
     );

}

const homepage = {
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '0px',
  paddingBottom: '30px',
  paddingTop: '20px',
  borderRadius: '10px',
  backgroundColor: 'white',
}

const homepage__parent = {
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '5px',
  boxShadow: '4px 5px 5px #333333',
}

const homepage__headerText = {
  fontFamily: 'Merriweather',
  fontSize: '30pt',
  margin: '0px',
  paddingTop: '20px',
  letterSpacing: '1px',
  marginBottom: '0px',
  textAlign: 'center',
}

const homepage__headerTextContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const homepage__descriptionTextContainer = {
  marginTop: '20px',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
}

const homepage__descriptionText = {
  fontFamily: 'Roboto',
  fontSize: '16pt',
  letterSpacing: '1px',
  lineHeight: '28px',
  marginBottom: '0px',
  marginTop: '0px',
}

const homepage__buttonContainer = {
  marginRight: '20px',
  marginLeft: '20px',
}

const homepage__orText = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '16pt',
  margin: '0px',
}