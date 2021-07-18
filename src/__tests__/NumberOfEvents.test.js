import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render 32 events", () => {
    expect(NumberOfEventsWrapper.find(".eventsNumber").prop("value")).toEqual("32");
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".eventsNumber")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const eventToShow = NumberOfEventsWrapper.state("eventToShow");
    expect(NumberOfEventsWrapper.find(".eventsNumber").prop("value")).toBe(eventToShow);
  });

  test("change state when text input changes", () => {
    NumberOfEventsWrapper.setState({ eventToShow: "32" });
    const eventObject = { target: { value: "10" }};
    NumberOfEventsWrapper.find(".eventsNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventToShow")).toBe("10");
  });
});