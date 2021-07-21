Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t specified a number of events
When the user sees the list of the events
Then the user should be able to see thirty two events on the events list

Scenario: User can change the number of events they want to see
Given the user didn’t change the number of events on the events list
When the user changes the number of the events
Then the user should be able to see the selected number of the events that they want to see