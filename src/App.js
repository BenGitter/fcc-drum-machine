import React, { Component } from 'react';
import './App.css';

import Display from './components/Display.js';
import SoundButton from './components/SoundButton.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      keys: [{
        name: "Q",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        keyCode: 81
      },{
        name: "W",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        keyCode: 87
      },{
        name: "E",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        keyCode: 69
      },{
        name: "A",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        keyCode: 65
      },{
        name: "S",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        keyCode: 83
      },{
        name: "D",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        keyCode: 68
      },{
        name: "Z",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        keyCode: 90
      },{
        name: "X",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        keyCode: 88
      },{
        name: "C",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        keyCode: 67
      }],
      displayText: "Display"
    }
  }

  onPlayAudio(name){
    this.setState({
      displayText: name
    });
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <Display text={this.state.displayText} />
        { this.state.keys.map((item, i) => {
          return <SoundButton 
                    id={item.name} 
                    name={item.name} 
                    key={i} 
                    onPlayAudio={this.onPlayAudio.bind(this, item.name)}
                    src={item.src} 
                    keyCode={item.keyCode} />
        }) }
      </div>
    );
  }
}

export default App;
