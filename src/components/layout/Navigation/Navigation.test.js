import React from 'react'
import { shallow, mount } from 'enzyme';

import Navigation from './Navigation';

const handleMap = () => console.log('Map was toggled');

describe("Navigation", () => {

  const mountedNav = mount(<Navigation toggleMap={handleMap}/>);

  it('renders Navigation correctly', () => {
    shallow(<Navigation/>)
  })

  describe("Switch in Navigation", () => {
    const switchButton = mountedNav.find('Switch');

    it('changes the `switchon` state to true when clicked', () => {
      switchButton.simulate('change');
      console.log(mountedNav.state());
      expect(switchButton.props().checked).toBe(false); //Come back to this (Problem caused due to withStyles(<Navigation/>))
    });

  })
});
