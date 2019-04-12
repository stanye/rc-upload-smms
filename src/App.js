import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destroyed: false,
    };
  }
  destroy = () => {
    this.setState({
      destroyed: true,
    });
  }
  render() {
    if (this.state.destroyed) {
      return null;
    }
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
