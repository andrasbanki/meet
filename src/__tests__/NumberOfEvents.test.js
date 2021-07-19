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
});