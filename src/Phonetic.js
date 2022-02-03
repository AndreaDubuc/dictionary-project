import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Phonetic.css';

export default function Phonetic(props) {
  return (
    <div className="Phonetic d-flex flex-row">
      <span className="text my-2"> /{props.phonetic.text}/ </span>
      <br />
      <div className="audio-player">
        <AudioPlayer
          layout="horizontal-reverse"
          customVolumeControls={[]}
          customAdditionalControls={[]}
          showJumpControls={false}
          showFilledProgress={false}
          showDownloadProgress={false}
          src={props.phonetic.audio}
          onPlay={(e) => console.log('onPlay')}
        />
      </div>
    </div>
  );
}
