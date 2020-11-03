/* Dependencies */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

/* Components */
import HighestAverageValues from "./HighestAverageValues";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(
  <HighestAverageValues
    highestAverage={40}
    minutes={20}
    workoutStat={"power"}
  />
);

describe("HighestAverageValues", () => {
  it("should render the correct string", () => {
    expect(wrapper.find("div").text()).toContain(
      "The highest average power for 20 minutes is 40"
    );
  });
});
