import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="Display" id="display">
        {this.props.text}
      </div>
    );
  }
}

export default Display;
