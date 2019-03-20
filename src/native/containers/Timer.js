import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopwatchControls from './StopwatchControls';
import Timers from './Timers';
import Task from './Task';
import Lap from './Lap';
import LapList from './LapList';
import FontAwesome from 'react-fontawesome';
import { convertToCentiSeconds } from '../helpers/helpers';
import { Firebase, FirebaseRef } from '../lib/firebase';
import { Input } from 'reactstrap';
import FetchTask  from './FetchTask';


class Timer extends Component {


  state = {
    totalTime: 0,
    name:''
    //currentLapTime: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {

    if (this.props.timer.started) {
      const now = convertToCentiSeconds(Date.now())
      const totalTime = now - this.props.timer.started + this.props.timer.recordedTime;
      this.setState({
        now,
        totalTime,
        currentLapTime: totalTime - this.props.timer.lapTotal
      });
    } else {
      if (this.props.timer.recordedTime !== this.state.totalTime) {
        this.setState({
          totalTime: this.props.timer.recordedTime,
          currentLapTime: this.props.timer.recordedTime - this.props.timer.lapTotal
        });
      }
    }
  }

  render() {
    return (
      <div className ="container">
      <div className="row">
        <div className="col-md-8">
        {/* <HeaderComponent {...this.state} /> */}
        <Task onChange={this.handleChange} {...this.state.name}/>
        </div>
        <div className="col-md-2">
          <Timers time={this.state.totalTime} />
        </div>
        <div className="col-md-2">
          <StopwatchControls {...this.state}/>
        </div>
      </div>
         {/* <Lap label={`Lap #${this.props.timer.laps.length + 1}`} time={this.state.currentLapTime} />  */}
          {/* <LapList /> */}

      {/* <FetchTask /> */}
      </div>

      //   <h1 className="app__title">Time Tracker</h1>
      //   {/* <Task /> */}
      //   <Timers label={'Total'} time={this.state.totalTime} />
      //   <StopwatchControls />
      //   {/* <Lap label={`Lap #${this.props.time.laps.length + 1}`} time={this.state.currentLapTime} /> */}
      //   {/* <LapList />
      // */}

    );
  }

}

export default connect(store => store)(Timer);
