import FontAwesome from 'react-fontawesome';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import React, {Component} from 'react'
import { ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';
import { startTimer, stopTimer } from '../actions/timer';
import { convertToCentiSeconds } from '../helpers/helpers';

class TaskList extends Component{

    constructor(props){
        super(props);
        this.state={
            name:[]
        }
    }

    // handleInputChange = (task, name) => {
    //     this.setState({
    //      [name]: task.target.value
    //    })
    //   }

    render(){
        const {StartTimer,stime,etime, started , StopTimer , key} = this.props;
        const {name} = this.props;
        if(started){
            return(
                <div>
                    
                   <span>{name}</span>&nbsp;
                   <Button class="button" style={{backgroundColor: "white", color:"green"}}>
                     <FontAwesome className="fa-fw"  name="play"/> 
                     </Button>
                </div>
            );
        }
        else{
            return(
                <div>
                     <span>{name}</span>&nbsp;
                    <Button class="button" style={{backgroundColor: "white", color:"green"}}onClick={() => StartTimer(convertToCentiSeconds(Date.now()),this.props.name)}>
                     <FontAwesome className="fa-fw"  name="play"/> 
                     </Button>
                </div>
            );            
        }

    }
}

const mapDispatchToProps = (dispatch) =>({
    StartTimer : (change,task) =>{
        dispatch(startTimer(change,task));
    },

    StopTimer : (change,key,task) =>{
        dispatch(stopTimer(change,key,task));
    }
})

const mapStateToProps = (state) =>{
    return{
        stime:state.timer.started,
        etime:state.timer.recordedTime,
        started :state.timer.started,
        key :state.timer.key
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);

