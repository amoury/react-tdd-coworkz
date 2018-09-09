import React from "react";
import PropTypes from 'prop-types';
import { shallow, mount } from "enzyme";
import createRouterContext from 'react-router-test-context';


import SpaceCard from "./SpaceCard";


const context = createRouterContext();
const childContextTypes = {
  router: PropTypes.object
};

describe("SpaceCard", () => {
  const mountedSpaceCard = mount(<SpaceCard />, { context, childContextTypes });

  it("renders CardList correctly", () => {
    mountedSpaceCard;
  });
});

