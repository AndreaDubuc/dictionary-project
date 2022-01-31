import React from 'react';

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic d-flex flex-row">
      <a href={props.phonetic.audio} target="_blank" rel="noopener">
        Listen
      </a>
      <br />
      <span className="text my-2"> /{props.phonetic.text}/ </span>
    </div>
  );
}
