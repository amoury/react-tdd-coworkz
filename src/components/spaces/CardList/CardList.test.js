import React from 'react';
import { shallow, mount } from 'enzyme';

import CardList from './CardList';


describe("CardList", () => {
  let props = { spaces: []};
  let mountedCardList; 

  beforeEach(() => {
    mountedCardList = mount(<CardList {...props} />)
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