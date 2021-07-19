import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    eventToShow: "32",
  };

  handleInputChanged = (event) => {

    const value = event.target.value;
    this.setState({
      eventToShow: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const eventToShow = this.state.eventToShow;
    return (
      <div className="numberOfEvents">
        <p>Number of events: </p>
        <input
          type="text"
          className="eventsNumber"
          value={eventToShow}
          onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    );
  }
}
export default NumberOfEvents;