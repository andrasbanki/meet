import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventToShow: "32",
    currentCity: "all",
  }

  componentDidMount() {
    const { eventToShow } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, eventToShow), locations: extractLocations(events) });
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
        <EventList 
          events={this.state.events}
        />
        <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
      </div>
    );
  }
}

export default App;