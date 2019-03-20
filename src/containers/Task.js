import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Label, FormGroup, Button, Input} from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import {startTimer} from '../actions/timer';



export class Task extends Component {
    constructor(props){
        super(props);
        this.state = ''
        // this.state={
        //   name:''
        // }
    }
  //   componentWillReceiveProps(props) {
  //       this.setState({ task: props.denom })
  //  }
  render() {
      const{task,currentTask, tasks}= this.props;
      
    return (
      <div>
        <FormGroup >
          <Input
            name="name"
            value={currentTask == '' ? this.state.name  : currentTask}
            id="name-simple" placeholder="What are you working on?"
            onChange={this.props.onChange}
          />
        </FormGroup>
        </div>
        )
    }
}
const mapStateToProps =(state) =>{
    return{
     task: state.timer.task,
     tasks : state.timer.tasks,
     currentTask : state.timer.currentTask
    }
  };

export default connect(mapStateToProps)(Task);