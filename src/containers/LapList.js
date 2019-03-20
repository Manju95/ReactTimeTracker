import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lap from './Lap';

export class LapList extends Component {
  render() {
    const { laps, task } = this.props;
     
    return (
     
      <div className="lap-list">
        {laps.map((lap, i) => {
          const lapNumber = laps.length - i;
          return (
            <Lap time={lap} />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   laps: state.timer.allRecord,
   task : state.timer.task
  };
};
export default connect(mapStateToProps)(LapList);
