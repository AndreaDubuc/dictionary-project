import gummybears from './gummybears.png';
import Dictionary from './Dictionary';
import './App.css';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        <header className="App-header">
          <img src={gummybears} className="gummy" alt="gummy bears" />
        </header>
        <main>
          <Dictionary defaultKeyword="gummy" />
        </main>
        <footer className="App-footer">
          <small className="small">
            <a
              className="links"
              href="https://github.com/AndreaDubuc/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Open source code{' '}
            </a>{' '}
            by {''}
            <a
              className="links"
              href="https://www.instagram.com/_andreacodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Andrea Dubuc{' '}
            </a>{' '}
            2022
          </small>
        </footer>
      </div>
    </div>
  );
}
