import React from 'react';
import { shallow, mount } from 'enzyme';

import CardList from './CardList';


describe("CardList", () => {
  const mountedCardList = mount(<CardList />);

  it("renders CardList correctly", () => {
    shallow(<CardList />);
  });

  it("renders a list of SpaceCards", () => {
    expect(mountedCardList.find('SpaceCard').exists()).toBe(true);
  });
})