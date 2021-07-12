# Achievement 4 Project: Meet App

### Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## User Stories:

As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city
As a user, I should be able to show/hide an event’s details, so that I can see the details an event or I can hide them.
As a user, I should be able to specify the number of events, so that I can see more events on the events list.  
As a user, I should be able to use the app when offline, so that I don’t need internet connection to see the upcoming events.
As a user, I should be able to add an app shortcut to my home screen, so that I can open my app quicker from my mobile device.
As a user, I should be able to display a chart showing the number of upcoming events by city, so that I can search through the upcoming events in this selected city.

## FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.Given the user hasn’t searched for any cityWhen the user opens the appThen the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. Given the main page is openWhen user starts typing in the city textboxThen the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textboxAnd the list of suggested cities is showingWhen the user selects a city (e.g., “Berlin, Germany”) from the listThen their city should be changed to that city (i.e., “Berlin, Germany”)And the user should receive a list of upcoming events in that city

## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default
Given the user didn’t open an event
When the user sees a list of events
Then the user can see the collapsed events by default

Scenario 2: User can expand an event to see its details
Given the user didn’t open an event
When the user opens one selected event
Then the user can see the details from the selected event

Scenario 3: User can collapse an event to hide its details
Given the user opened one event from the list to see the details
When the user wants to close the details of the event
Then the user should be able to hide the details of the event

## FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t specified a number of events
When the user sees the list of the events
Then the user should be able to see 32 events on the events list

Scenario 2: User can change the number of events they want to see
Given the user didn’t change the number of events on the events list
When the user changes the number of the events
Then the user should be able to see the selected number of the events that they want to see

## FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connection
When user uses the app without internet connection
Then the user should be able to see the events

Scenario 2: Show error when user changes the settings (city, time range)
Given the user has no internet connection
When the user wants to change his settings
Then the user should be able to see an error message from the app

## FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user is surfing on the application
When the user sees a list of cities
Then the user should be able to see the number of upcoming events in each city
