import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleSpaceDetails from "./SingleSpaceDetails" 

describe("SingleSpaceDetails", () => {
const mountedSingleSpaceDetails = mount(<SingleSpaceDetails />);

  it("renders SingleSpaceDetails correctly", () => {
    shallow(<SingleSpaceDetails />);
  });

});