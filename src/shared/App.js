import React, { Component } from 'react'
import Home from './Home'
import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    )
  }
}

export default App
