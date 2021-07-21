Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given the user didn’t open an event
When the user sees a list of events
Then the user can see the collapsed events by default

Scenario: User can expand an event to see its details
Given the user didn’t open an event
When the user opens one selected event
Then the user can see the details from the selected event

Scenario: User can collapse an event to hide its details
Given the user opened one event from the list to see the details
When the user wants to close the details of the event
Then the user should be able to hide the details of the event