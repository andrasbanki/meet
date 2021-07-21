import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user hasn’t specified a number of events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });
    when('the user sees the list of the events', () => {
      AppWrapper = mount(<App />);
    });
    then('the user should be able to see thirty two events on the events list', () => {
      expect(AppWrapper.state("events").length).toBe(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user didn’t change the number of events on the events list', () => {
      AppWrapper = mount(<App />);
    });
    when('the user changes the number of the events', () => {
      AppWrapper.find(".eventsNumber").simulate("change", {
        target: { value: 2 }
      })
    });
    then('the user should be able to see the selected number of the events that they want to see', () => {
      AppWrapper.update();
      expect(AppWrapper.state("events").length).toBe(2);
    });
  });
});