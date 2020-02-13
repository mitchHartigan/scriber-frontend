import React from 'react';


export function FormAlertText (props) {
  if (props.isActive) {
    return <span style={FormAlertTextActive}>{props.message}</span>
  } else {
    return <span style={FormAlertTextInactive}>{props.message}</span>
  }
}


export function FormButton (props){
  if (props.isHighlighted) { 
    return <button style={highlightedFormButtonStyle} onClick={props.handleClick}>{props.children}</button>
  }
  return <button style={nonHighlightedFormButtonStyle} onClick={props.handleClick}>{props.children}</button>
}

export function FormInput (props) {
  if (!props.isErrored) {
    return (
      <div>
        <input style={inputElem} type={props.type}
         name={props.name} placeholder={props.placeholder}
        />
      </div>
     );

  } else {
    return (
      <div>
        <input style={erroredInputElem} type={props.type}
         name={props.name} placeholder={props.placeholder}
        />
      </div>
     );
  }
}

export function Logo (props) {
  return (
    <div style={logoContainer}>
      <img 
        src={props.logoSrc} 
        alt="quill by artworkbean from the Noun Project"
        height="170"
      />
    </div>
   );
}

export function NavButton (props) {
  return (
    <div
      onClick={props.handleClick}
      style={navButtonStyle}
    >
    <img src={props.icon} alt="back button"/>
    </div>
  );
}

export function VisibilityBtn (props) {
  return ( 
    <div>
      <button style={visibilityButton} onClick={props.handleClick}>
        <img src={props.imgSrc} alt={props.imgAlt}/>
      </button>
    </div>
   );
}

export function LoadingSpinner(props) {
  if(props.waitingForResponse) {
    return (
      <div className="ldsRing__container">
        <div className="ldsRing"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
  return null;
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

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

const visibilityButton = {
  border: 'none',
  padding: '0px',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}