import React from 'react';
import { shallow, mount } from 'enzyme';
import LocationMarker from './LocationMarker';

describe("<LocationMarker />", () => {
  it('renders the LocationMarker correctly', () => {
    shallow(<LocationMarker />);
  })
})
