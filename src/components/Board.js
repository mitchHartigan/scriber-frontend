import React, { Component } from "react";

import StickyNote from "./StickyNote.js";
import { Header } from "./molecules";
import uuidv4 from "uuid/v4";
import { fetchNotes, postNotes } from "../utilities";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      notes: []
    };
  }

  // -------------------------------------------------------------------------------------------------------
  // Requests the notes that the user has stored under their account from the backend.
  // Parses token from localStorage, which contains user email, for easy lookup and validation.
  // -------------------------------------------------------------------------------------------------------
  async componentWillMount() {
    let token = JSON.parse(localStorage.getItem("token"));
    let res = await fetchNotes(token);
    // this.setState({notes: notes});
    if (res.status === 200) {
      let notes = await res.json();
      this.setState({ notes: notes });
    }
    this.setState({ token: token });
  }
  // -------------------------------------------------------------------------------------------------------
  // Code for managing the notes displayed on the board - ie creating, deleting,
  // and syncing the notes[] array in this components state all of the child elements.
  // -------------------------------------------------------------------------------------------------------

  // Creates a new note to be displayed.
  createNote = text => {
    let currentState = this.state.notes;
    let randomXPos = Math.floor(Math.random() * (window.innerWidth - 200));
    let randomYPos = Math.floor(Math.random() * (window.innerHeight - 200));
    let uuid = uuidv4().toString();
    let newNote = { text: text, xPos: randomXPos, yPos: randomYPos, id: uuid };
    currentState.push(newNote);
    this.setState({ currentState });
    postNotes(this.state.token, currentState);
  };

  // Method to be passed to child element, to allow notes[] x/y
  // position values to be updated from the child.
  updateParentPos = (index, xPos, yPos) => {
    let currentState = this.state.notes;
    currentState[index].xPos = xPos;
    currentState[index].yPos = yPos;
    this.setState(currentState);
  };

  // Method to be passed to child element, to allow notes[] text
  // value to be updated from the child.
  updateParentText = (index, text) => {
    let currentState = this.state.notes;
    currentState[index].text = text;
    this.setState({ notes: currentState }, () => {
      postNotes(this.state.token, currentState);
    });
  };

  // Sends updated data to backend once the user has repositioned a note.
  handleDragStop = () => {
    postNotes(this.state.token, this.state.notes);
  };

  // Method called from the delete button on the StickyNote, which removes
  // the specified object from the notes array, therefore deleting the note.
  deleteNote = index => {
    const currentState = this.state.notes;
    currentState.splice(index, 1);
    this.setState({ notes: currentState }, () => {
      postNotes(this.state.token, this.state.notes);
    });
  };

  // Function to be passed into map, that prints out each sticky note to the screen,
  // passing in attributes as props and children of the StickyNote element.
  eachNote = (note, i) => {
    return (
      <StickyNote
        key={note.id}
        index={i}
        updateParentText={this.updateParentText}
        updateParentPos={this.updateParentPos}
        deleteNote={this.deleteNote}
        xPos={note.xPos}
        yPos={note.yPos}
        handleStop={this.handleDragStop}
      >
        {note.text}
      </StickyNote>
    );
  };

  // Loops through the note array, calling this.eachNote on each object, and
  // printing out the notes on the screen.
  render() {
    return (
      <div>
        <div style={signOutBtn__container}>
          <Header
            addNoteBtn={() => this.createNote()}
            handleSignOut={this.props.handleSignOut}
          />
        </div>
        <div style={board}>
          <div>{this.state.notes.map(this.eachNote)}</div>
        </div>
      </div>
    );
  }
}

const signOutBtn__container = {
  alignSelf: "flex-start"
};

const board = {
  display: "flex"
};
