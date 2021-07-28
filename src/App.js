import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
//import WelcomeScreen from "./WelcomeScreen";
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventToShow: "32",
    currentCity: "all",
    warningText: "",
//    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    const { eventToShow } = this.state;
    this.mounted = true;
    // const accessToken = localStorage.getItem('access_token');
    // const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get("code");
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, eventToShow),
            locations: extractLocations(events),
          });
        }
      });
      if (!navigator.onLine) {
        this.setState({
          warningText: "It looks like you are offline. Don't worry, you can still see the events.",
        });
      } else {
        this.setState({
          warningText: "",
        });
//      }  
    }
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
//    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch 
          locations={locations} 
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents} 
        />
        <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
        <WarningAlert text={this.state.warningText} />
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>  
        </div>
        <EventList events={events} />    
        {/*<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />   */}
      </div>
    );
  }
}

export default App;