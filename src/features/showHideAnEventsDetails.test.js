import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user didn’t open an event', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });
    when('the user sees a list of events', () => {
      AppWrapper = mount(<App />);
    });
    then('the user can see the collapsed events by default', () => {
      expect(EventWrapper.find(".eventDetails")).toHaveLength(0);
    });
  });
  
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user didn’t open an event', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });
    when('the user opens one selected event', () => {
      EventWrapper.find(".showDetailsButton").simulate("click");
    });
    then('the user can see the details from the selected event', () => {
      expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user opened one event from the list to see the details', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".showDetailsButton").simulate("click");
      EventWrapper.find(".eventDetails");
    });
    when('the user wants to close the details of the event', () => {
      EventWrapper.find(".hideDetailsButton").simulate("click");
    });
    then('the user should be able to hide the details of the event', () => {
      expect(EventWrapper.find(".eventDetails")).toHaveLength(0);
    });
  });
});