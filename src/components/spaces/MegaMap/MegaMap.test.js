import React from 'react';
import { shallow, mount } from 'enzyme';
import MegaMap from './MegaMap';


describe("MegaMap", () => {
  it("renders MegaMap without crashing", () => {
    shallow(<MegaMap/>);
  })
})