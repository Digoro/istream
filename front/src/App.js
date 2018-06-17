import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import MainContainer from './MainContainer'
import ListContainer from './ListContainer'
import StreamContainer from './StreamContainer'

// import logo from './logo.svg'
import './App.css'
import RequestStreamContainer from './RequestStreamContainer';

const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Router history={ history }>
        <div>
          <Route exact path='/main' component={ MainContainer } />
          <Route exact path='/list/:category_id' component={ ListContainer } />
          <Route exact path='/stream' component={ RequestStreamContainer } />
          <Route exact path='/stream/:stream_id' component={ StreamContainer } />
        </div>
      </Router>
    )
  }
}

export default App
