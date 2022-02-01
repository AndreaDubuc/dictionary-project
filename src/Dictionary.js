import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // TODO: #2 You should try and do some error handling in the event the API fails.
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
      </div>
    );
  } else{
load();
return"Loading";

  }
}
