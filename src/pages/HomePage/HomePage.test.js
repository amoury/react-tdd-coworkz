import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from './HomePage';
import axios from 'axios';

const mountedHome = mount(<HomePage/>);

describe("HomePage", () => {
  it('renders HomePage correctly', () => {
    shallow(<HomePage/>)
  });

  describe('showMap in HomePage', () => {
    it('initializes with `state.showMap` false', () => {
      expect(mountedHome.state().showMap).toBe(false);
    });
  
    it('does not render second column if state.showMap is false', () => {
      expect(mountedHome.find('Grid').length).toEqual(2);
    });
  
    it('renders MegaMap if state.showMap is true', () => {
      mountedHome.setState({ showMap: true });
      expect(mountedHome.find('MegaMap').exists()).toBe(true);
    });

  })

  describe('Cards', () => {
    it('renders list of coworking spaces cards', () => {
      expect(mountedHome.find('CardList').length).toEqual(1);
    });
  });

  describe("Asynchronous Call", () => {
    it('calls axios.get in `componentDidMount`', () => {
      return mountedHome.instance().componentDidMount().then(() => {
        expect(axios.get).toHaveBeenCalled();
      })
    })
    
    it('calls the axios with correct url', () => {
      return mountedHome.instance().componentDidMount().then(() => {
        expect(axios.get).toHaveBeenCalledWith("http://ip-api.com/json");
      })
    });
    
    it('updates the state with data from the api', () => {
      return mountedHome.instance().componentDidMount().then(() => {
        expect(mountedHome.state()).toHaveProperty("userLocation", {
          city: "Dubai",
          country: "United Arab Emirates",
          coordinates: { "lat": undefined, "lng": undefined }
        });
      })
    });
    
  })

});

