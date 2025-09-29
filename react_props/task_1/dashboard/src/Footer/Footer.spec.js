import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Testing <Footer /> component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders a p element with correct text", () => {
    const wrapper = shallow(<Footer />);
    const year = new Date().getFullYear();
    const expectedText = `Copyright ${year} - Holberton School`;

    const p = wrapper.find("p");
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual(expectedText);
  });
});
