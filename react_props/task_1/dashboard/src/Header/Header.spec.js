import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Testing <Header /> component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders the Holberton logo", () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.find("img");
    expect(img).toHaveLength(1);
    expect(img.prop("alt")).toBe("Holberton logo");
  });

  it("renders a h1 element with correct text", () => {
    const wrapper = shallow(<Header />);
    const h1 = wrapper.find("h1");
    expect(h1).toHaveLength(1);
    expect(h1.text()).toBe("School dashboard");
  });
});
