import React from 'react';
import { shallow, mount } from 'enzyme';

import Loader from './Loader';

describe("Loader", () => {
  it("renders Loader correctly", () => {
    shallow(<Loader/>);
  })
})
