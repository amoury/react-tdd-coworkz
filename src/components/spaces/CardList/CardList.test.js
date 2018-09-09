import React from 'react';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';

import createRouterContext from 'react-router-test-context';


import CardList from './CardList';

const context = createRouterContext();
const childContextTypes = {
  router: PropTypes.object.isRequired
};


describe("CardList", () => {
  let props = { spaces: []};
  let mountedCardList; 

  beforeEach(() => {
    mountedCardList = mount(<CardList {...props} />, { context, childContextTypes })
  })


  it("renders CardList correctly", () => {
    mountedCardList;
  });



  describe('spaces contains one or more objects', () => {
    beforeEach(() => {
      props = { spaces: [{ id: "0001", name: "sample name" }] }
      mountedCardList = mount(<CardList {...props} />);
    });


    it("renders a list of SpaceCards", () => {
      expect(mountedCardList.find('SpaceCard').exists()).toBe(true);
    });
  })
})