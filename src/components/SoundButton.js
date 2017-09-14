import React, { Component } from 'react';
import './SoundButton.css';

class SoundButton extends Component {
  audio;

  onPlayAudio(){
    this.audio.currentTime = 0;
    this.audio.play();
    this.props.onPlayAudio();
  }

  componentDidMount(){
    this.audio = document.querySelector("#"+this.props.id);

    document.addEventListener("keydown", (e) => {
      if(e.keyCode === this.props.keyCode || e.keyCode === this.props.keyCode+32){
        this.onPlayAudio();
      }
    });
  }

  render() {
    return (
      <div 
        className="SoundButton drum-pad" 
        id={"pad-"+this.props.id}
        onClick={this.onPlayAudio.bind(this)}
      >
        <audio src={this.props.src} className="clip" id={this.props.id} />
        {this.props.name}
      </div>
    );
  }
}

export default SoundButton;
