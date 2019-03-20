import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer, addLap, postStartTime, updateStopTimer } from '../actions/timer';
import FontAwesome from 'react-fontawesome';
import { convertToCentiSeconds } from '../helpers/helpers';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import { Firebase, FirebaseRef } from '../lib/firebase';

export class StopwatchControls extends Component {
  render(props) {
    const { started,onStartTimer, onStopTimer, onResetTimer, onAddLap,keys, name } = this.props;
    console.log(this.props.name);
    if (started) {
      return (
        <div className="stopwatch-controls">
          <Button class="button" style={{backgroundColor: "white", color:"red"}} onClick={() => onStopTimer(convertToCentiSeconds(Date.now()), keys)}>
            <FontAwesome className="fa-fw" name='square' />
          </Button>
          {/* <button className="button button--blue" onClick={() => onAddLap(convertToCentiSeconds(Date.now()))}>
            <FontAwesome className="fa-fw" name='refresh' /> Lap
          </button>  */}
        </div>
      )
    } else {
      return (
        <div className="stopwatch-controls">
          <Button class="button" style={{backgroundColor: "white", color:"green"}}onClick={() => onStartTimer(convertToCentiSeconds(Date.now()),this.props.name)}>
            <FontAwesome className="fa-fw"  name="play"/> 
          </Button>
          {/* <button className="button button--red" onClick={() => onResetTimer()}>
            <FontAwesome className="fa-fw" name='trash' /> 
          </button> */}
        </div>
      )
    }
  }
}
const mapStateToProps =(state) =>{
  return{
    // dispatch: state.dispatch,
    started: state.timer.started,
    keys: state.timer.key
  
  }
};
const mapDispatchToProps = (dispatch, state) => ({
  onStartTimer: (change, task) => {
    dispatch(postStartTime(change, task));
  },
  onStopTimer: (change, keys) => {
    dispatch(updateStopTimer(change, keys)).then(dispatch(addLap(change))).then(dispatch(resetTimer()));
   },
  // onResetTimer: () => {
  //   dispatch(resetTimer());
  // },
  //  onAddLap: () => {
  //   dispatch(addLap(convertToCentiSeconds(Date.now())));
  // },
  
});

export default connect(mapStateToProps,mapDispatchToProps)(StopwatchControls);
