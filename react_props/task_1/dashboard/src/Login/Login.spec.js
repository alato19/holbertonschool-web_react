import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./Login";

describe("Testing <Login /> component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders 2 input elements", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("renders 2 label elements", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("renders 1 button element", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("focuses input when its label is clicked", () => {
    const wrapper = mount(<Login />);
    const emailLabel = wrapper.find("label").at(0); // first label
    const emailInput = wrapper.find("input").at(0);

    // simulate clicking the label
    emailLabel.simulate("click");

    // now check focus
    expect(document.activeElement).toEqual(emailInput.getDOMNode());

    wrapper.unmount();
  });
});
