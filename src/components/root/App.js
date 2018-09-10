import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import HomePage from '../../pages/HomePage';
import SingleSpacePage from '../../pages/SingleSpacePage';
import { fetchSpacesAsync } from '../../actions/spaceActions';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchSpacesAsync();
  }

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

export default connect(null, {fetchSpacesAsync})(App);
