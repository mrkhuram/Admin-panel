import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/admin'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home'
import './components/styling.css'
import history from './components/history/history'




class App extends React.Component {




  render() {

    return (
      <BrowserRouter
      history={history}
      
      >

        <div className="App">
          <Admin />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
