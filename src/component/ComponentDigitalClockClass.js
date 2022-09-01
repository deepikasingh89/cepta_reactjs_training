import React from "react";

class DigitalClockClass extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <div className="Clock">
          <div className="dc-label">Digital Clock Class component: </div>
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}

export default DigitalClockClass;