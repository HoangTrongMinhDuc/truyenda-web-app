import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './t.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className={styles.iconText}>
            hello world
        </div>
      </div>
    );
  }
}

export default App;
