import React, { Component } from "react";

class SpecificVenue extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.match.params.venueName}</h1>
        <img
          src={this.props.location.state.venueImage}
          alt="Venue Image Here"
          class="venueImage"
        />
      </div>
    );
  }
}

export default SpecificVenue;
