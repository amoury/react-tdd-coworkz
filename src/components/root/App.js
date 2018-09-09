import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from '../../pages/HomePage';
import SingleSpacePage from '../../pages/SingleSpacePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/spaces/:id" component={SingleSpacePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
