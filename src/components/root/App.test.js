import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const shallowApp = shallow(<Router><App/></Router>)

it('renders without crashing', () => {
  shallowApp;
});
