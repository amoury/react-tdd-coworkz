import React from 'react';
import { shallow, mount } from 'enzyme';

import SingleSpacePage from './SingleSpacePage';

describe("SingleSpacePage", () => {
  let props;
  let mountedPage;

  beforeEach(() => {
    mountedPage = mount(<SingleSpacePage {...props} />)
  });

  it('renders the SingleSpacePage correctly', () => {
    mountedPage;
  })
})
