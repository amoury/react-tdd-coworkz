import React from "react";
import { shallow, mount } from "enzyme";

import SpaceCard from "./SpaceCard";

describe("SpaceCard", () => {
  const mountedSpaceCard = mount(<SpaceCard />);

  it("renders CardList correctly", () => {
    shallow(<SpaceCard />);
  });
});

