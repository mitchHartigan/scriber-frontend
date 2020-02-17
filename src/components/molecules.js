import React from "react";

export function AddNoteBtn(props) {
  return (
    <div>
      <button onClick={props.handleClick} style={plusButton}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export function Header(props) {
  return (
    <div style={signOutBtn__container}>
      <AddNoteBtn handleClick={props.addNoteBtn} />
      <button style={signOutBtn} onClick={props.handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

// AddNoteBtn Styles
const plusButton = {
  borderRadius: "100%",
  width: "60px",
  height: "60px",
  float: "left",
  marginTop: "15px",
  marginLeft: "15px",
  outline: "none",
  border: "none",
  fontFamily: "Roboto",
  color: "white",
  fontSize: "34pt",
  fontWeight: "100",
  backgroundColor: "#2374AB",
  cursor: "pointer"
};

// Header Styles
const signOutBtn = {
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "Roboto",
  paddingTop: "20px",
  paddingRight: "15px",
  fontSize: "12pt",
  color: "white",
  cursor: "pointer"
};

const signOutBtn__container = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start"
};
