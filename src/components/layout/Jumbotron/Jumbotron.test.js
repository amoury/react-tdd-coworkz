import React from "react";
import { shallow, mount } from "enzyme";

import Jumbotron from "./Jumbotron";

describe("Jumbotron", () => {
  const mountedJumbotron = mount(<Jumbotron />);

  it("renders Jumbotron correctly", () => {
    shallow(<Jumbotron />);
  });
});
