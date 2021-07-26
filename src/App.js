import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventToShow: "32",
    currentCity: "all",
    warningText: ""
  }

  componentDidMount() {
    const { eventToShow } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, eventToShow),
          locations: extractLocations(events) 
        });
      }
      if (navigator.online) {
        this.setState({
          warningText: "It looks like you are offline. Don't worry, you can still see your events.",
        });
      } else {
        this.setState({
          warningText: ''
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location ,eventToShow) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') 
      ? events.slice(0, eventToShow)
      : events.filter((event) => event.location === location);
    if (this.mounted) {
      this.setState({
        events: locationEvents.slice(0, eventToShow),
        currentCity: location
      });
    }
  });
  } 

  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} 
        />
        <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
        <WarningAlert text={this.state.warningText} />
        <EventList 
          events={this.state.events}
        />
      </div>
    );
  }
}

export default App;