import React from 'react';

class Timmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
      constInterval: undefined,
    };
    this.startTimming = this.startTimming.bind(this);
    this.stopTimming = this.stopTimming.bind(this);
  }

  componentDidUpdate() {
    this.stopTimming();
  }

  startTimming() {
    const ONE_SECONDS = 1000;
    const { constInterval } = this.state;
    console.log(constInterval);
    if (!constInterval) {
      const setConstInterval = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
          constInterval: setConstInterval,
        }));
      }, ONE_SECONDS);
    }
  }

  stopTimming() {
    const { constInterval, seconds } = this.state;
    if (seconds === 0 && constInterval) {
      clearInterval(constInterval);
      this.setState({
        constInterval: undefined,
        seconds: 30,
      });
    }
  }

  render() {
    const { seconds } = this.state;
    return (
      <section>
        <div>{seconds}</div>
        <button type="button" onClick={ this.startTimming }>Start</button>
      </section>
    );
  }
}

export default Timmer;
