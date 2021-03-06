import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatTime } from '../helpers/helpers';
import {ListGroupItem}  from 'reactstrap';

export class Lap extends Component {
  render() {
    return (
      <div className="lap">
        <label className="lap__label">{this.props.task}</label>
        <label className="lap__label">{this.props.task}</label>
       
    <div className="lap__clock">{formatTime(this.props.time)}</ div>
      </div>
    );
  }
}

Lap.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(state => state)(Lap);
