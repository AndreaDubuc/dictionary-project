import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css';

export default function Phonetic(props) {
  return (
    <div className="Phonetic d-flex flex-row">
      <span className="text my-2"> /{props.phonetic.text}/ </span>
      <br />
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </div>
    </div>
  );
}
