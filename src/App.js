import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state = {
    color: "gray",
  }

  handleSubmit = (e)=>{
    this.setState({
      color:e,
    })
  }
  render() {

    const DynamicStyle = {
      "color": `${this.state.color}`,
    }

    const StateDisplay = ()=>{
      return (
        <h1>State Color: {this.state.color}</h1>
      )
    }
    return (
      <div className="App" style = {DynamicStyle}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style ={DynamicStyle}>
            Choose your favorite color
        < Form handleSubmit={this.handleSubmit}/>

          </div>
          <a
            className="App-link"
            href="https://maxjann.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jann Software
          </a>
        </header>
      </div>
    );
  }
}

export default App;
