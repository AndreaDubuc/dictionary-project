import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css';


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

 

function handleDictionaryResponse(response) {
  setResults(response.data[0]);
}

function handlePexelResponse(response) {
  setPhotos(response.data.photos);
}



  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    // TO DO: #2 You should try and do some error handling in the event the API fails.

    let pexelsApiKey =
      '563492ad6f917000010000018ae84ba919b24864b3653a96e2268bbc';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelResponse); 
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load(){
  setLoaded(true);
  search();
}



  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up? </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: aurora, idyllic, supine, clinomania,
            petrichor...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else{
load();
return"Loading";

  }
}
