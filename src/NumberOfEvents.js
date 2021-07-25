import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventToShow: "32",
    errorText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        eventToShow: value,
        errorText: 'Please choose a number between 1 and 32!'
      });
    } else if (value > 32) {
        return this.setState({
          errorText: 'Please choose a number between 1 and 32!',
          eventToShow: value,
        }) 
    } else {
      this.setState({
        eventToShow: value,
        errorText: ''
      });  
      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  render() {
    const eventToShow = this.state.eventToShow;
    return (
      <div className="numberOfEvents">
        <p>Number of Events:</p>
        <input
          type="text"
          className="eventsNumber"
          value={eventToShow}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;