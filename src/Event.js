import React, { Component } from "react";

class Event extends Component {
  state = {
    showHideDetails: false
  };

  handleButton = () => {
    this.setState((prevState) => ({ showHideDetails: !prevState.showHideDetails }));
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="eventName">{event.summary}</h1>
        <p className="eventDate">{event.start.dateTime}</p>
        <p>{event.start.timeZone}</p>
        <p className="eventLocation">{event.location}</p>
        {this.state.showHideDetails === true && (
        <div className="eventDetails">
          <h2>About event:</h2>
          <p>{event.description}</p>
        </div>
        )}
        {this.state.showHideDetails === false && (
          <button className="showDetailsButton" onClick={() => this.handleButton()}>show details</button>
        )}
        {this.state.showHideDetails === true && (
          <button className="hideDetailsButton" onClick={() => this.handleButton()}>hide details</button>
        )}
      </div>
    );
  }
}
export default Event;