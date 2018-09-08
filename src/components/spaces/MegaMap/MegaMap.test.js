import React from 'react';
import { shallow, mount } from 'enzyme';
import MegaMap from './MegaMap';


describe("MegaMap", () => {
  let props;
  let mountedMap;

  beforeEach(() => {
    props = { spaces: [] }
    mountedMap = mount(<MegaMap {...props} />);
  });

  it("renders MegaMap without crashing", () => {
    mountedMap;
  });

  describe("renders LocationMarker when spaces.length > 1", () => {
    beforeEach(() => {
      props = { spaces: [{id: "0001", name: "sample name", geometry: { location: { lat: 25.555, lng: 55.3824 }}}]}
      mountedMap = mount(<MegaMap {...props} />);
    })

    it("renders LocationMarker", () => {
      expect(mountedMap.find("LocationMarker").length).toEqual(mountedMap.props().spaces.length);
    })
  })
})