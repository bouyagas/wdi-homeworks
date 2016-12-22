import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      milliseconds: 0,
      seconds: 0,
      minutes: 0
    };
  }


  start() {
    const clock = setInterval(() =>{
      if (this.state.milliseconds === 99 && this.state.seconds === 59) {
          this.setState({
            milliseconds: 0,
            seconds: 0,
            minutes: this.state.minutes + 1
          })
        } else if (this.state.milliseconds === 99) {
          this.setState({
            milliseconds: 0,
            seconds: this.state.seconds + 1
          })
        } else {
        this.setState({
          milliseconds: this.state.milliseconds + 1
        })
      }
    }, 10)

   this.setState({
      timer: clock
    })
  }

  stop() {
    clearInterval(this.state.timer);
  }


  reset() {
    clearInterval(this.state.timer);

    this.setState({
      milliseconds: 0,
      seconds: 0,
      minutes: 0
    })
  }

  render() {

    return (
      <div className="wrapper">
        <div className="time">
          <p>{this.state.minutes}:</p>
          <p>{this.state.seconds}:</p>
          <p>{this.state.milliseconds}</p>
        </div>
        <div className="buttons">
          <button onClick={this.start.bind(this)}>Start</button>
          <button onClick={this.stop.bind(this)}>Stop</button>
          <button onClick={this.reset.bind(this)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
