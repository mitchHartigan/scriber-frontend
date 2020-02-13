import React, { Component } from "react";
import Draggable from "react-draggable";

export class StickyNote extends Component {
  // This is the Sticky Note component, which will render one sticky note when called.
  // The component expects a text value input as a child, and an index value (representing
  // it's correlating value in the parent array of post it elements) passed in as a prop.
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isEditing: false,
      textVal: this.props.children,
      displayTextVal: '',
      deltaPosition: {
        x: this.props.xPos,
        y: this.props.yPos,
      },
      index: this.props.index,
    };
  }

  componentWillMount() {
    this.handleLongText(this.props.children);
  }

  // Method that updates the x and y positions of the StickyNote element in both the state of 
  // the individual child StickyNote element, and in the notes[] array of the Board element,
  // each time the note is moved.
  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    let xPos = x + ui.deltaX;
    let yPos = y + ui.deltaY;
    this.setState({
      deltaPosition: {
        x: xPos,
        y: yPos
      }
    });
    this.props.updateParentPos(this.props.index, xPos, yPos);
  };

  // Sends the updated textarea value to the parent Board element, stored in this child
  // element as it's state, and passed in through the toggleMode() function.
  saveText = text => {
    this.props.updateParentText(this.props.index, text);
  };

  // Updates the state of this post it element's textVal onChange, called each
  // time the value in the textarea changes.
  updateChildState = event => {
    this.setState({ textVal: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') { 
      this.toggleMode();
    }
  }

  handleLongText = (text) => {
    if (text && text.length >= 50) {
      let shortenedText = text.substring(0, 50) + '...';
      this.setState({displayTextVal: shortenedText});
    } else {
      this.setState({displayTextVal: text})
    }
  }

  // Toggles the state of the post it between edit mode and display mode. The
  // ! is used to make sure the state is always changed to the opposite of it's
  // current value, as this function is called in both modes.

  // This function also passes the text area value to saveText(), which will send it
  // to the parent element.
  toggleMode = () => {
    if (this.state.isEditing) {
      this.saveText(this.state.textVal);
    }
    this.setState({ isEditing: !this.state.isEditing });
    this.handleLongText(this.state.textVal);
  };

  handleDelete = () => {
    this.props.deleteNote(this.props.index);
  }

  // The 'display mode' for the post it, where the text cannot be edited. On button press, the
  // element will re-render into edit mode.
  renderDisplayMode = () => {
    return (
      <Draggable
        onDrag={this.handleDrag}
        onStop={this.props.handleStop}
        defaultPosition={{ x: this.props.xPos, y: this.props.yPos }}
        bounds="body"
      >
        <div className="postIt">
          <div className="postIt__Container">
            <p className="postIt__Text">{this.state.displayTextVal}</p>
          </div>
          <button onClick={this.toggleMode} className="postIt__editButton">
            Edit
          </button>
        </div>
      </Draggable>
    );
  };

  // The editing mode version of the post it, which displays a textarea, and saves each
  // change the user makes to the text value inside. When the save button is
  // clicked, the parent board component is sent the value of the textbox, which updates
  // the notes array in the Board elements state accordingly.
  renderEditMode = () => {
    return (
      <Draggable onDrag={this.handleDrag} cancel="textarea" bounds="body">
        <div 
          className="postIt postIt--Editing"
          onKeyPress={this.handleKeyPress}
        >
          <textarea
            className="postIt__TextArea"
            defaultValue={this.state.textVal}
            onChange={this.updateChildState}
          />
          <button
            onClick={() => this.toggleMode(this.state.textVal)}
            className="postIt__saveButton"
          >
            Save
          </button>
          <button
            onClick={() => this.handleDelete(this.state.index)}
            className="postIt__deleteButton"
          >
            Delete
          </button>
        </div>
      </Draggable>
    );
  };

  // Renders the post it in either view depending on whether or not it's in edit mode,
  // allowing for easily swapping between them on button press.
  render() {
    if (this.state.isEditing) {
      return this.renderEditMode();
    } else {
      return this.renderDisplayMode();
    }
  }
}


export default StickyNote;
