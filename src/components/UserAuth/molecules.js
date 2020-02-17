import React from "react";

/* -------------------------------------------------------------------*/
export function FormAlertText(props) {
  if (props.isActive) {
    return <span style={FormAlertText__active}>{props.message}</span>;
  } else {
    return <span style={FormAlertText__inactive}>{props.message}</span>;
  }
}

const FormAlertText__active = {
  fontFamily: "Roboto",
  color: "#eb0000",
  fontSize: "12pt",
  textAlign: "center",
  marginTop: "10px",
  animationName: "alertAnim",
  animationDuration: "0.4s",
  animationTimingFunction: "ease-in-out"
};

const FormAlertText__inactive = {
  display: "none"
};

/* -------------------------------------------------------------------*/
export function FormButton(props) {
  if (props.isHighlighted) {
    return (
      <button style={formButton__highlighted} onClick={props.handleClick}>
        {props.children}
      </button>
    );
  }
  return (
    <button style={formButton} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

const formButton = {
  marginTop: "20px",
  marginBottom: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  width: "100%",
  fontFamily: "Roboto",
  fontSize: "14pt",
  fontWeight: "500",
  color: "black",
  backgroundColor: "white",
  border: "2px solid #2E4A9E",
  borderRadius: "5px",
  cursor: "pointer"
};

const formButton__highlighted = {
  marginTop: "20px",
  marginBottom: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  width: "100%",
  fontFamily: "Roboto",
  fontSize: "14pt",
  color: "white",
  backgroundImage: "linear-gradient(#2E649E, #2E4A9E)",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

/* -------------------------------------------------------------------*/
export function FormInput(props) {
  if (!props.isErrored) {
    return (
      <div>
        <input
          style={inputElem}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    );
  } else {
    return (
      <div>
        <input
          style={inputElem__errored}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    );
  }
}

const inputElem = {
  boxSizing: "border-box",
  width: "100%",
  fontSize: "12pt",
  paddingTop: "10px",
  borderColor: "#2E649E",
  borderRadius: "5px",
  paddingLeft: "12px",
  paddingBottom: "10px"
};

const inputElem__errored = {
  boxSizing: "border-box",
  width: "100%",
  fontSize: "12pt",
  paddingTop: "10px",
  borderColor: "#eb0000",
  borderRadius: "5px",
  paddingLeft: "12px",
  paddingBottom: "10px"
};

/* -------------------------------------------------------------------*/
export function Logo(props) {
  return (
    <div style={logo}>
      <img
        src={props.logoSrc}
        alt="quill by artworkbean from the Noun Project"
        height="170"
      />
    </div>
  );
}

const logo = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

/* -------------------------------------------------------------------*/
export function NavButton(props) {
  return (
    <div onClick={props.handleClick} style={navButton}>
      <img src={props.icon} alt="back button" />
    </div>
  );
}

const navButton = {
  width: "40px",
  height: "40px",
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#EDEDED",
  cursor: "pointer",
  marginRight: "10px",
  marginLeft: "20px",
  marginTop: "20px"
};

/* -------------------------------------------------------------------*/
export function VisibilityBtn(props) {
  return (
    <div>
      <button style={visibilityButton} onClick={props.handleClick}>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </button>
    </div>
  );
}

const visibilityButton = {
  border: "none",
  padding: "0px",
  outline: "none",
  backgroundColor: "transparent",
  cursor: "pointer"
};

/* -------------------------------------------------------------------*/
export function LoadingSpinner(props) {
  if (props.waitingForResponse) {
    return (
      <div className="ldsRing__container">
        <div className="ldsRing">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return null;
}
