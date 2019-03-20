import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Label, FormGroup, Button, Input} from 'reactstrap';
import {FormControl} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import {startTimer} from '../actions/timer';
export class Task extends Component {
    constructor(props){
        super(props);
        this.state = { task: props.task } || "en"
    }
    componentWillReceiveProps(props) {
        this.setState({ task: props.denom })
   }
  render() {
     const{task}= this.props;
    return (
      <div>
        <FormGroup >
          <Input
            name="name"
            value={this.state.task}
            id="name-simple" placeholder="What are you working for?"
            onChange={this.props.onChange}
          />
        </FormGroup>
        </div>
        )
    }
}
const mapStateToProps =(state) =>{
    return{
     task: state.timer.task 
    }
  };

export default connect(mapStateToProps)(Task);